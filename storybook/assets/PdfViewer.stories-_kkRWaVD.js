import{j as r,M as s}from"./iframe-yLJxkVzB.js";import{P as p}from"./pdf-viewer-BZ5e8lyY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BlhnarD5.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-22KobQ6c.js";import"./index-nIKj5uY4.js";import"./BasePdfViewer-CHY3YkvF.js";import"./BasePdfViewer.module.css-DhQrrxsI.js";import"./PdfViewerAnnotationLayer-D1Yz7aaN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwhfkUtM.js";import"./PdfViewerOutlineSidebar-VuDaSJNh.js";import"./PdfViewerSidebarHeader-BoASpN_s.js";import"./useBaseUiId-C2QLSnG8.js";import"./useControlled-CJJ5Ltiy.js";import"./CompositeRoot-9vcarpiT.js";import"./CompositeItem-Bteys6EZ.js";import"./ToolbarRootContext-LMgR1PX5.js";import"./composite-dCt9YpUk.js";import"./svgIconContainer-TK-Ji3z6.js";import"./PdfViewerSearchBar-B6n1NJ7T.js";import"./chevron-up-CjZcFQnk.js";import"./chevron-down-NEt8c7o4.js";import"./cross-Owpme9BE.js";import"./PdfViewerSidebar-BPsEnFZi.js";import"./index-vF_-Jyj8.js";import"./index-BA5McYn9.js";import"./index-DfLe8XpU.js";import"./PdfViewerToolbar-DCPv8B-z.js";import"./Button-wUttMbxG.js";import"./chevron-right-Drvm9vwP.js";import"./Input-CPmagxfJ.js";import"./search-B5yRV9xp.js";import"./spin-BpB7gGnd.js";import"./error-CkjCJkJz.js";import"./withOsdkMetrics-EW4d60np.js";import"./makeExternalStore-BrbywmR6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
