import{j as r,M as s}from"./iframe-BDNIqcwM.js";import{P as p}from"./pdf-viewer-BNWt8Sz9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-sjF87z3X.js";import"./preload-helper-AKgPBeH6.js";import"./PdfViewer-B94JbrvO.js";import"./index-CxoqJ8Ca.js";import"./BasePdfViewer-CXLLTpiy.js";import"./BasePdfViewer.module.css-D-wam4DK.js";import"./PdfViewerAnnotationLayer-DYjgGqdJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CfU3A6uv.js";import"./PdfViewerOutlineSidebar-DWjzfEPe.js";import"./PdfViewerSidebarHeader-Cjr_vBzS.js";import"./useBaseUiId-D6uxKhCZ.js";import"./useControlled-jo7j2Y8W.js";import"./CompositeRoot-CWUeN4IQ.js";import"./CompositeItem-9re6AgtS.js";import"./ToolbarRootContext-BkqYYhP3.js";import"./composite-CjQ-M14e.js";import"./svgIconContainer-YSUGMhqY.js";import"./PdfViewerSearchBar-CkpzgdlO.js";import"./chevron-up-BtnFHI9a.js";import"./chevron-down-B8PeAqOW.js";import"./cross-DSoUlEls.js";import"./PdfViewerSidebar-BzNEl_jM.js";import"./index-DKSVa_Lx.js";import"./index-DYO33UQo.js";import"./index-Dy4KxyPS.js";import"./PdfViewerToolbar-B7GJiQ28.js";import"./Button-DAHfEEi6.js";import"./chevron-right-Bq4gT9hl.js";import"./Input-CGsPuuzg.js";import"./search-B7vNZRvA.js";import"./spin-OYpBNBm1.js";import"./error-CizQVsJR.js";import"./withOsdkMetrics-DbOReG2B.js";import"./makeExternalStore-qbxX8lsc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
