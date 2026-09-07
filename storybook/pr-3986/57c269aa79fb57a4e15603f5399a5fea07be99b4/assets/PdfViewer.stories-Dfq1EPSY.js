import{j as r,M as s}from"./iframe-CyooYLyM.js";import{P as p}from"./pdf-viewer-DCN6UccB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DOO5TKIs.js";import"./preload-helper-Bngm7-ol.js";import"./PdfViewer-CELUEf1l.js";import"./index-CIHNhV_V.js";import"./BasePdfViewer-D6aousjK.js";import"./BasePdfViewer.module.css-BRRv-uBi.js";import"./PdfViewerAnnotationLayer-Bl0Ia4-j.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--NNsmHpP.js";import"./PdfViewerOutlineSidebar-e_ARaY7j.js";import"./PdfViewerSidebarHeader-CaEKX9cV.js";import"./useBaseUiId-B6QldWDF.js";import"./useControlled-i1Ezl6Tl.js";import"./CompositeRoot-D1wurxJU.js";import"./CompositeItem-Bl-YA0xX.js";import"./ToolbarRootContext-D7fAF7oZ.js";import"./composite-Ct2KL6gZ.js";import"./svgIconContainer-BUB4CTcl.js";import"./PdfViewerSearchBar-Bf50G-2G.js";import"./chevron-up-B1BvxY5_.js";import"./chevron-down-B96rYcxD.js";import"./cross-ECBcZMsc.js";import"./PdfViewerSidebar-wuS8Pbgp.js";import"./index-LrFKMTxg.js";import"./index-CeYxTKYZ.js";import"./index-CYfla4gt.js";import"./PdfViewerToolbar-Cthevp5K.js";import"./Button-BmMB6JHM.js";import"./chevron-right-CRclLAmX.js";import"./Input-COiGAk6z.js";import"./search-B3kqtI7c.js";import"./spin-DyRzmcg5.js";import"./error-CQMuKd3b.js";import"./withOsdkMetrics-D__EiDJX.js";import"./makeExternalStore-DQfo9etd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
