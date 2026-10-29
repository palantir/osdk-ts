import{j as r,M as s}from"./iframe-CTMkKkzw.js";import{P as p}from"./pdf-viewer-CzXnZKNF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DBeLuxZs.js";import"./preload-helper-DG8pwmv3.js";import"./PdfViewer-BAuqkmvt.js";import"./index-BL_iYgDS.js";import"./BasePdfViewer-DZbguCNV.js";import"./BasePdfViewer.module.css-ByVY_hmN.js";import"./PdfViewerAnnotationLayer-BH7T4tvx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BFM0L6ul.js";import"./PdfViewerOutlineSidebar-BLnktyFt.js";import"./PdfViewerSidebarHeader-f_5gOovD.js";import"./useBaseUiId-Nc3myLqM.js";import"./useControlled-Dmn8OKSb.js";import"./CompositeRoot-BgCNcQb8.js";import"./CompositeItem-CSULberz.js";import"./ToolbarRootContext-CIGDW9Ar.js";import"./composite-np7yuSJU.js";import"./svgIconContainer-BUps9CL-.js";import"./PdfViewerSearchBar-C0e7WuTy.js";import"./chevron-up-QV-8O4iZ.js";import"./chevron-down-BCsUFncR.js";import"./cross-B-D9SFl0.js";import"./PdfViewerSidebar-y0jBhr5C.js";import"./index-C4YYp6_d.js";import"./index-B9bA0pQd.js";import"./index-KMN5SPjN.js";import"./PdfViewerToolbar-BBxT-yqd.js";import"./Button-u7wDd7Jy.js";import"./chevron-right-C5qJ_6p1.js";import"./Input-SxG8NTwK.js";import"./search-8dNzS2xV.js";import"./spin-DXsspKBe.js";import"./error-BFPACif0.js";import"./withOsdkMetrics-BkagLhYt.js";import"./makeExternalStore-CLmOAONC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
