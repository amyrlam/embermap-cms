import Component from '@ember/component';
import { select } from 'd3-selection';

export default Component.extend({
  
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  authors: [
    { name: 'Mark Twain', count: 15 },
    { name: 'Virginia Woolf', count: 42 },
    { name: 'John Steinbeck', count: 23 },
    { name: 'Ralph Ellison', count: 27 }
  ],

  didInsertElement() {
    let svg = select(this.$('svg')[0]);

    // svg.append('rect')
    //   .attr('width', 20)
    //   .attr('height', 100);

    // svg.append('rect')
    //   .attr('width', 20)
    //   .attr('height', 50)
    //   .attr('x', 25);

    svg.selectAll('rect').data(this.get('authors'))
      .enter()
      .append('rect')
      .attr('width', 20)
      .attr('height', author => author.count)
      .attr('x', (author, index) => 25 * index);
  }
});
