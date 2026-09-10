import{j as r,M as s}from"./iframe-Djf7Pdxr.js";import{P as p}from"./pdf-viewer-CdttZhrF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPt4Y5Ur.js";import"./preload-helper-bqmPmNVM.js";import"./PdfViewer-ChQFsdJG.js";import"./index-q-X2FPlx.js";import"./BasePdfViewer-D0Fv1Ks0.js";import"./BasePdfViewer.module.css-BAqT5IbN.js";import"./PdfViewerAnnotationLayer-CMe_9zab.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ckl1lmOG.js";import"./PdfViewerOutlineSidebar-D5YQQo3U.js";import"./PdfViewerSidebarHeader-BnON9e_L.js";import"./useBaseUiId-CFhAQZOZ.js";import"./useControlled-DBGPJ9YV.js";import"./CompositeRoot-BXrdOGV5.js";import"./CompositeItem-CA-IJTMc.js";import"./ToolbarRootContext-DMoWDH_V.js";import"./composite-IAQwOYh1.js";import"./svgIconContainer-BOlRpQyp.js";import"./PdfViewerSearchBar-B86Eh5sG.js";import"./chevron-up-Dw4yeYoV.js";import"./chevron-down-CuR5Ei1Z.js";import"./cross-DFIWw1bP.js";import"./PdfViewerSidebar-DnZbRtcw.js";import"./index-3wqM3UEs.js";import"./index-Br-LNr6E.js";import"./index-B_8x8Udt.js";import"./PdfViewerToolbar-i6A5MP4l.js";import"./Button-DSU1CbLm.js";import"./chevron-right-DVNrGmh5.js";import"./Input-BOeBxQZ8.js";import"./search-Ddeiu8tt.js";import"./spin-DQ3nCj4j.js";import"./error-D2_XhANl.js";import"./withOsdkMetrics-Bs-xSy0E.js";import"./makeExternalStore-D2eKyzGX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
