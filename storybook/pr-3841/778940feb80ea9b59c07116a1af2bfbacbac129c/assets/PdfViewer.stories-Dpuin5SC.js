import{j as r,M as s}from"./iframe-0hzt8uI9.js";import{P as p}from"./pdf-viewer-DCUBQMRi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BW8q9QXU.js";import"./preload-helper-DYpcx0vb.js";import"./PdfViewer-CISzjcYi.js";import"./index-B8ey7LBN.js";import"./BasePdfViewer-CMbQ9898.js";import"./BasePdfViewer.module.css-lg_kaDAv.js";import"./PdfViewerAnnotationLayer-CCrkfMiU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dq44MDTF.js";import"./PdfViewerOutlineSidebar-Ciad6A-4.js";import"./PdfViewerSidebarHeader-BgiKAJgC.js";import"./useBaseUiId-Dq5-ot3p.js";import"./useControlled-CR71uT_f.js";import"./CompositeRoot-DX6iOnyK.js";import"./CompositeItem-B4wf29Ba.js";import"./ToolbarRootContext-DMiVgANq.js";import"./composite-DM9rU2PJ.js";import"./svgIconContainer-DbVM6MQd.js";import"./PdfViewerSearchBar-B0LTWGly.js";import"./chevron-up-FZsPsJr-.js";import"./chevron-down-EB3ta9K0.js";import"./cross-DjAvUIeX.js";import"./PdfViewerSidebar-BnMn-vDD.js";import"./index-JO_mHdMF.js";import"./index-Dz32LMbM.js";import"./index-B5xQNHde.js";import"./PdfViewerToolbar-DjqaVZmf.js";import"./Button-xLAmrvCU.js";import"./chevron-right-DQicelr1.js";import"./Input-B6yL1HnH.js";import"./search-DT_KCJGf.js";import"./spin-Bq-qh2yX.js";import"./error-CvvhWrfu.js";import"./withOsdkMetrics-udXbveSG.js";import"./makeExternalStore-DblTGXsz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
