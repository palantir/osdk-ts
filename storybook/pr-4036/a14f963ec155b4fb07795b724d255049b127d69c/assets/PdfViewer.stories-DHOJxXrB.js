import{j as r,M as s}from"./iframe-X-VSGX-m.js";import{P as p}from"./pdf-viewer-BJcQAOQK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BkHyGuJb.js";import"./preload-helper-BSxm0T4I.js";import"./PdfViewer-CyFJbWUZ.js";import"./index-CGDH48tf.js";import"./BasePdfViewer-BCp7VZ46.js";import"./BasePdfViewer.module.css-Dx0D_gVd.js";import"./PdfViewerAnnotationLayer-BglCWKFe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C5v76JBo.js";import"./PdfViewerOutlineSidebar-5X5Ss9Hg.js";import"./PdfViewerSidebarHeader-BZtI7sRz.js";import"./useBaseUiId-BBsjPzS0.js";import"./useControlled-CS7Ud3A1.js";import"./CompositeRoot-BJcQ097z.js";import"./CompositeItem-Dt-41Y4b.js";import"./ToolbarRootContext-CAbB3DSY.js";import"./composite-BZ7oE03c.js";import"./svgIconContainer-BdGqJkEg.js";import"./PdfViewerSearchBar-BQbRgn1X.js";import"./chevron-up-CbCJqwQx.js";import"./chevron-down-Z8wpnP0p.js";import"./cross-CrghqoWd.js";import"./PdfViewerSidebar-5uaN8rWi.js";import"./index-Daq_EkrJ.js";import"./index-DSvAdAem.js";import"./index-C6OnhXV1.js";import"./PdfViewerToolbar-Dj97fOhV.js";import"./Button-BvYXLNva.js";import"./chevron-right-BQnbmMNT.js";import"./Input-CjGosPl8.js";import"./search-CzcR_jWd.js";import"./spin-C6JIAVxG.js";import"./error-D6m_rkvI.js";import"./withOsdkMetrics-hcsSE1Yl.js";import"./makeExternalStore-CDBEj4Yx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
