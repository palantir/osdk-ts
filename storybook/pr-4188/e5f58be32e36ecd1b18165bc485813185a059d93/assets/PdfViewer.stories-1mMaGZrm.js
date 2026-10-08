import{j as r,M as s}from"./iframe-BdamuBSW.js";import{P as p}from"./pdf-viewer-BNlCPbx4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DXP8kllh.js";import"./preload-helper-DZ9xmEaG.js";import"./PdfViewer-BA17jVoK.js";import"./index-CzCGUNDu.js";import"./BasePdfViewer-CfuEivHT.js";import"./BasePdfViewer.module.css-DNaam48w.js";import"./PdfViewerAnnotationLayer-uA9U8qiX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BlGRZKJK.js";import"./PdfViewerOutlineSidebar-B5sPVgvF.js";import"./PdfViewerSidebarHeader-BiZaCb4D.js";import"./useBaseUiId-CrCJEUlz.js";import"./useControlled-D5iM1jy5.js";import"./CompositeRoot-D_N-KuvT.js";import"./CompositeItem-BuuNoifa.js";import"./ToolbarRootContext-VKjIBJTb.js";import"./composite-Bvo9YAgy.js";import"./svgIconContainer-CGhkkD0s.js";import"./PdfViewerSearchBar-BIIHkJvh.js";import"./chevron-up-uP8S8emQ.js";import"./chevron-down-BM9a4BBi.js";import"./cross-CLaBWSw6.js";import"./PdfViewerSidebar-BKCJ2olr.js";import"./index-Djo-XrZC.js";import"./index-B5Cmbtjp.js";import"./index-BCh8Pu1q.js";import"./PdfViewerToolbar-CKIh_5KU.js";import"./Button-NcM8hPFP.js";import"./chevron-right-DrMBe7og.js";import"./Input-vUwBhrLX.js";import"./search-XGjCTgti.js";import"./spin-DyzQzq41.js";import"./error-DKUZpZvu.js";import"./withOsdkMetrics-CSNwlJ-x.js";import"./makeExternalStore-DmdygOVW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
