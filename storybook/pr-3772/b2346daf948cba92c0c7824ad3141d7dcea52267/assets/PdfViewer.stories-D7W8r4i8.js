import{j as r,M as s}from"./iframe-BzQifrbm.js";import{P as p}from"./pdf-viewer-mRyEyVJM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B6JzqV4H.js";import"./preload-helper-CfkbdYt3.js";import"./PdfViewer-MhwTkIC0.js";import"./index-DmrXmCsp.js";import"./BasePdfViewer-BeQ0xu5k.js";import"./BasePdfViewer.module.css-C9_zxmWt.js";import"./PdfViewerAnnotationLayer-PYI32aEU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEwu1LOx.js";import"./PdfViewerOutlineSidebar-DQ74vB3c.js";import"./PdfViewerSidebarHeader-RLHDy8cK.js";import"./useBaseUiId-6fIHZX7k.js";import"./useControlled-D0PoBQGG.js";import"./CompositeRoot-CGj0oX1M.js";import"./CompositeItem-CA5vFsEl.js";import"./ToolbarRootContext-CUQpKqWY.js";import"./composite-Bm8VjQnK.js";import"./svgIconContainer-eTPVDcxE.js";import"./PdfViewerSearchBar-4VkcM9Qs.js";import"./chevron-up-Djx50XjO.js";import"./chevron-down-DgIB0DB7.js";import"./cross-BtXGESXa.js";import"./PdfViewerSidebar-BuW1CKGV.js";import"./index-YkT_3P70.js";import"./index-DRwqomtN.js";import"./index-C6mlQsvu.js";import"./PdfViewerToolbar-KmEDLLfM.js";import"./Button-DGOVPU6o.js";import"./chevron-right-Dp6OsSDk.js";import"./Input-D_KI0oie.js";import"./search-i0ScbyPC.js";import"./spin-Dz0T-Avo.js";import"./error-C5OE11e3.js";import"./withOsdkMetrics-QrXZuSy4.js";import"./makeExternalStore-CKMY6uVx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
