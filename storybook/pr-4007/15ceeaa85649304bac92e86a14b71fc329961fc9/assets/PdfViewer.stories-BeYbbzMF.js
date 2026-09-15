import{j as r,M as s}from"./iframe-DL6bhntV.js";import{P as p}from"./pdf-viewer-CYdx9W42.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CyLUF0nI.js";import"./preload-helper-Bzx1Zh_S.js";import"./PdfViewer-CCb1jCgM.js";import"./index-B8ftOcx-.js";import"./BasePdfViewer-ovuFaj2s.js";import"./BasePdfViewer.module.css-DvAVzt7j.js";import"./PdfViewerAnnotationLayer-BQkmul1J.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aqKr73rf.js";import"./PdfViewerOutlineSidebar-DXteouwE.js";import"./PdfViewerSidebarHeader-DEsrLVQi.js";import"./useBaseUiId-llhhqJOe.js";import"./useControlled-DiqKmz4m.js";import"./CompositeRoot-CSNMjnnk.js";import"./CompositeItem-Bp1V_qz6.js";import"./ToolbarRootContext-CvpBNR1-.js";import"./composite-BF5DU4SU.js";import"./svgIconContainer-DSWQOkNx.js";import"./PdfViewerSearchBar-D3yYix33.js";import"./chevron-up-BGIW6-mE.js";import"./chevron-down-B213Fcrt.js";import"./cross-DyIDhlr1.js";import"./PdfViewerSidebar-o5mr3_oK.js";import"./index-DteBpDZt.js";import"./index-Bs7nlaiS.js";import"./index-DJ4ha6JU.js";import"./PdfViewerToolbar-dwhuRpea.js";import"./Button-B0CnBgjK.js";import"./chevron-right-tijEnKfz.js";import"./Input-BPBmB1lT.js";import"./search-DfezW5-F.js";import"./spin-D66BBfQZ.js";import"./error-BD8Fuc9b.js";import"./withOsdkMetrics-D6wPv70n.js";import"./makeExternalStore-OJ90FHcV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
