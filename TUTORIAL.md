- content of webpage in `report.md`

- write in it by using markdown syntax (subtitles, bold/italic text ...)
- add images by using the syntax `![assets/img/image_name]`
- generate html for plots using plotly by using (all of the html files have to be in the `_includes` folder)

```python
import plotly.io as pio
pio.write_html(fig, file='_includes/figure.html', auto_open=True)
```

