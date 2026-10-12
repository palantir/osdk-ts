import{j as r,M as s}from"./iframe-BLtbB9yL.js";import{P as p}from"./pdf-viewer-CaWEfF2j.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BNj_9Euk.js";import"./preload-helper-NY6L4APl.js";import"./PdfViewer-BtWuceSw.js";import"./index-Dzu4b_IB.js";import"./BasePdfViewer-6Q-COljH.js";import"./BasePdfViewer.module.css-C0fDwV7Y.js";import"./PdfViewerAnnotationLayer-CxPWWlJG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DvInpOxN.js";import"./PdfViewerOutlineSidebar-CdCAww5f.js";import"./PdfViewerSidebarHeader-BzPWK79K.js";import"./useBaseUiId-DmOmCKZO.js";import"./useControlled-WQcnYS8e.js";import"./CompositeRoot-BD6WdsPb.js";import"./CompositeItem-DNKgQIaZ.js";import"./ToolbarRootContext-DdGg-Lfa.js";import"./composite-Cypvm6OB.js";import"./svgIconContainer-cTxegse7.js";import"./PdfViewerSearchBar-sO5-3Ydb.js";import"./chevron-up-BVr3oU-0.js";import"./chevron-down-BhpG0rg7.js";import"./cross-C7Pfqsgy.js";import"./PdfViewerSidebar-B0-5Yp7H.js";import"./index-DcUVdUbh.js";import"./index-Dq2eIlq8.js";import"./index-u2zPfote.js";import"./PdfViewerToolbar-B3Dg05ea.js";import"./Button-B6pZtsky.js";import"./chevron-right-Bnw4Q8nU.js";import"./Input-BiA-3KH_.js";import"./search-1AInKOFa.js";import"./spin-CLzxPla7.js";import"./error-BGqP2VaS.js";import"./withOsdkMetrics-CFSyk5hC.js";import"./makeExternalStore-Bw178tiK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
