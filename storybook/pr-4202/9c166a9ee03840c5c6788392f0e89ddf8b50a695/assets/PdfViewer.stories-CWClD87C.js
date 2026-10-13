import{j as r,M as s}from"./iframe-Cnqo8JoO.js";import{P as p}from"./pdf-viewer-SVmEvBUq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CmHoGuue.js";import"./preload-helper-DB7HrsLr.js";import"./PdfViewer-DzOeOxog.js";import"./index-DPLneUTO.js";import"./BasePdfViewer-DztAsZZF.js";import"./BasePdfViewer.module.css-DuuqIdR4.js";import"./PdfViewerAnnotationLayer-DKuLBSpd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRoK8awg.js";import"./PdfViewerOutlineSidebar-BDVNQu_y.js";import"./PdfViewerSidebarHeader-OIzYUx3j.js";import"./useBaseUiId-CMntNwg3.js";import"./useControlled-D7Uij8uU.js";import"./CompositeRoot-Dh3LHx10.js";import"./CompositeItem-Cx-1EMH-.js";import"./ToolbarRootContext-BP77INzo.js";import"./composite-DaaqoGoy.js";import"./svgIconContainer-CSxRudGe.js";import"./PdfViewerSearchBar-DSPa2S3T.js";import"./chevron-up-BPnDo3OQ.js";import"./chevron-down-T8AVx82S.js";import"./cross-L-SNvRGg.js";import"./PdfViewerSidebar-BP9S1HDF.js";import"./index-BDFdu6IJ.js";import"./index-CwsDo0MO.js";import"./index-CKI4qvj-.js";import"./PdfViewerToolbar-D2pPM0WN.js";import"./Button-ChrgAtHr.js";import"./chevron-right-CUjtjav7.js";import"./Input-DB0BU6v_.js";import"./search-Bfy7kx1g.js";import"./spin-Dx9riRnu.js";import"./error-DWCGh03E.js";import"./withOsdkMetrics-C2CbSeLM.js";import"./makeExternalStore-BgRsNlcL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
