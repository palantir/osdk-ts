import{j as r,M as s}from"./iframe-D8PhF-eH.js";import{P as p}from"./pdf-viewer-GVAbtwVP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cg6kBSFi.js";import"./preload-helper-BAjhLXlD.js";import"./PdfViewer-BF0z8GmT.js";import"./index-GeJSxn-b.js";import"./BasePdfViewer-CL8IkRh1.js";import"./BasePdfViewer.module.css-BSykiNVX.js";import"./PdfViewerAnnotationLayer-BHdgNbN8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_9GUhaZ.js";import"./PdfViewerOutlineSidebar-CCawmC0v.js";import"./PdfViewerSidebarHeader-DKpmd7rg.js";import"./useBaseUiId-B7vHmMIX.js";import"./useControlled-Bb2LNbVb.js";import"./CompositeRoot-BNpHuEUn.js";import"./CompositeItem-hs5t7L4r.js";import"./ToolbarRootContext-CfxpKT0G.js";import"./composite-D3ANHq5C.js";import"./svgIconContainer-B9myFr8z.js";import"./PdfViewerSearchBar-BU9PmUBT.js";import"./chevron-up-CfuzuH3q.js";import"./chevron-down-egnrEsvE.js";import"./cross-B-SWIjS0.js";import"./PdfViewerSidebar-BeyDyRVn.js";import"./index-3jm-2kpZ.js";import"./index-BjXCP1BI.js";import"./index-C2YCUhpZ.js";import"./PdfViewerToolbar-BVeqOqlB.js";import"./Button-DJIgkoJK.js";import"./chevron-right--HKCWypp.js";import"./Input-BVLD4pm0.js";import"./search-CFo5JCpY.js";import"./spin-DKmeLC3e.js";import"./error-odhwE47h.js";import"./withOsdkMetrics-BIKp0vOQ.js";import"./makeExternalStore-XQeLMI6O.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
