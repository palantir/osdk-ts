import{j as r,M as s}from"./iframe-Yi2ClGEq.js";import{P as p}from"./pdf-viewer-DTYsVz3N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CVN53cwQ.js";import"./preload-helper-Bw9P2RvH.js";import"./PdfViewer-C5U40PJc.js";import"./index-kCKGZ11f.js";import"./BasePdfViewer-izKfCC1I.js";import"./BasePdfViewer.module.css-BjG5wlfV.js";import"./PdfViewerAnnotationLayer-DY77ItAy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-3cDKITRD.js";import"./PdfViewerOutlineSidebar-BlpwzDza.js";import"./PdfViewerSidebarHeader-CdzGDHS2.js";import"./useBaseUiId-BJvR5yfv.js";import"./useControlled-688Acsw-.js";import"./CompositeRoot-DF6Us1D8.js";import"./CompositeItem-DwrEPXux.js";import"./ToolbarRootContext-erRSrQJW.js";import"./composite-7FUpzlUO.js";import"./svgIconContainer-DLtA5jnz.js";import"./PdfViewerSearchBar-Ds5Nei_7.js";import"./chevron-up-Baq_eNft.js";import"./chevron-down-A6HBtaN4.js";import"./cross-DHxNtUiL.js";import"./PdfViewerSidebar-DURysJaj.js";import"./index-Ccuhm711.js";import"./index-C3Jd9_Nf.js";import"./index-DxUEYHeM.js";import"./PdfViewerToolbar-DoBHax9X.js";import"./Button-BhYwxPlJ.js";import"./chevron-right-BDMwOzmn.js";import"./Input-B_VCwPTa.js";import"./search-D88J6TuI.js";import"./spin-BC-aXoiD.js";import"./error-CvXgqfjV.js";import"./withOsdkMetrics-Dhx42yDK.js";import"./makeExternalStore-BnsF0xX3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
