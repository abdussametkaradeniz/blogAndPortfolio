// import node module libraries
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Flatpickr from 'react-flatpickr';
import { Button, Form, Offcanvas } from 'react-bootstrap';

// import widget/custom components
import { FormSelect } from 'widgets';

const AddEditEvent = props => {
  const { show, onHide, iseditevent, selectedevent, calendarapi } = props;
  const isediteventBool = (/^(true|yes|on)$/i).test(iseditevent)
  return (
    <Offcanvas show={show} onHide={onHide} placement="end" {...props}>
      <Offcanvas.Header closeButton className='border-bottom'>
        <Offcanvas.Title>{isediteventBool ? "Edit" : "Add New"} Event</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <EventForm calendarapi={calendarapi}
          iseditevent={iseditevent} selectedevent={selectedevent}
          onHide={onHide}
        />
      </Offcanvas.Body>
    </Offcanvas>
  )
}

const EventForm = props => {
  const { calendarapi, iseditevent, selectedevent, onHide } = props;
  const isediteventBool = (/^(true|yes|on)$/i).test(iseditevent)
  // Initialize all required states for event fields
  const [eventId, setEventId] = useState(selectedevent && selectedevent.id)
  const [title, setTitle] = useState(selectedevent && selectedevent.title)
  const [description, setDescription] = useState(selectedevent && selectedevent.extendedProps.description)
  const [location, setLocation] = useState(selectedevent && selectedevent.extendedProps.location)
  const [startDate, setStartDate] = useState(new Date(selectedevent && selectedevent.start))
  const [endDate, setEndDate] = useState(new Date(selectedevent && selectedevent.end))
  const [category, setCategory] = useState(selectedevent && selectedevent.extendedProps.category)

  // Function to manage event form submission.
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isediteventBool) {
      // Execute below code on event editing
      const updatedEventData = {
        id: selectedevent.id,
        title: title,
        start: startDate,
        end: endDate,
        allDay: true,
        extendedProps: {
          category: category,
          location: location,
          description: description
        }
      }
      const propsToUpdate = ['id', 'title']
      const extendedPropsToUpdate = ['category', 'location', 'description']
      const existingEvent = calendarapi.getEventById(eventId)

      // Set event properties except date related
      for (let index = 0; index < propsToUpdate.length; index++) {
        const propName = propsToUpdate[index]
        existingEvent.setProp(propName, updatedEventData[propName])
      }

      // Set date related props
      existingEvent.setDates(
        new Date(updatedEventData.start),
        new Date(updatedEventData.end),
        { allDay: updatedEventData.allDay })

      // Set event's extendedProps
      for (let index = 0; index < extendedPropsToUpdate.length; index++) {
        const propName = extendedPropsToUpdate[index]
        existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName])
      }
    } else {
      // Execute below code on new event entry
      calendarapi.addEvent({
        id: uuid(),
        title: title,
        start: startDate,
        end: endDate,
        allDay: true,
        extendedProps: {
          category: category,
          location: location,
          description: description
        }
      });
    }
    onHide();
  }

  // Background color options
  const backgroundOptions = [
    { value: 'primary', label: 'Primary' },
    { value: 'danger', label: 'Danger' },
    { value: 'success', label: 'Success' },
    { value: 'info', label: 'Info' },
    { value: 'dark', label: 'Dark' },
    { value: 'warning', label: 'Warning' },
  ];

  // Delete event method
  const handleDeleteEvent = () => {
    onHide()
    calendarapi.getEventById(eventId).remove();
  }

  return (
    <Form onSubmit={handleFormSubmit} >
      {/* Event Title */}
      <Form.Group className="mb-2" controlId="eventTitle">
        <Form.Label> Event Title </Form.Label>
        <Form.Control type="text" placeholder="Event Title"
          onChange={e => setTitle(e.target.value)}
          value={title || ""}
          required />
      </Form.Group>

      {/* Event Background */}
      <Form.Group className="mb-2" controlId="eventBackground">
        <Form.Label>Select Background</Form.Label>
        <Form.Control
          as={FormSelect}
          placeholder="Select Background"
          options={backgroundOptions}
          value={category || ''}
          defaultselected={category}
          onChange={e => setCategory(e.target.value)}
          required
        />
      </Form.Group>

      {/* Event Start Date */}
      <Form.Group className="mb-2 event-date" controlId="eventStartDate">
        <Form.Label>Event Start Date</Form.Label>
        <Flatpickr
          value={startDate}
          placeholder='Select Start Date'
          className="form-control"
          options={{
            dateFormat: "Y-m-d",
            monthSelectorType: 'dropdown',
            yearSelectorType: 'static',
            static: true,
            wrap: false
          }}
          onChange={date => {
            setStartDate(date[0]);
          }}
        />
      </Form.Group>

      {/* Event End Date */}
      <Form.Group className="mb-2 event-date" controlId="eventEndDate">
        <Form.Label>Event End Date</Form.Label>
        <Flatpickr
          value={endDate}
          placeholder='Select End Date'
          className="form-control "
          options={{
            dateFormat: "Y-m-d",
            monthSelectorType: 'dropdown',
            yearSelectorType: 'static',
            static: true,
            minDate: new Date(startDate).fp_incr(1)
          }}
          onChange={(date) => {
            setEndDate(date[0]);
          }}
        />
      </Form.Group>

      {/* Event Location */}
      <Form.Group className="mb-2" controlId="eventLocation">
        <Form.Label> Event Location</Form.Label>
        <Form.Control type="text"
          placeholder="Event Location"
          required
          value={location || ''}
          onChange={e => setLocation(e.target.value)}
        />
      </Form.Group>

      {/* Event Description */}
      <Form.Group className="mb-2" controlId="eventDescription">
        <Form.Label> Event Description</Form.Label>
        <Form.Control as="textarea"
          placeholder="Event Description"
          required
          rows={3}
          value={description || ''}
          onChange={e => setDescription(e.target.value)}
        />
      </Form.Group>

      <div className="mt-3">
        <Button type="submit" variant="primary" id="add-new-event-btn">{isediteventBool ? "Update" : "Add"} Event</Button>
        {isediteventBool && <Button className="ms-2" variant="danger" onClick={handleDeleteEvent}>Delete</Button>}
        <Form.Control type="hidden" id="eventid" name="eventid" value={eventId} onChange={e => setEventId(e.target.value)} />
      </div>

    </Form>
  )
}

export default AddEditEvent