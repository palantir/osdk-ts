import{j as r,M as s}from"./iframe-B7iXMeep.js";import{P as p}from"./pdf-viewer-2EUvlKVW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-_LxdPjII.js";import"./preload-helper-BZFSoYNL.js";import"./PdfViewer-Dnanzi9x.js";import"./index-B9IPxHLp.js";import"./BasePdfViewer-B6chQyhi.js";import"./BasePdfViewer.module.css-BLT4w_HQ.js";import"./PdfViewerAnnotationLayer-DFsYF910.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-w1XcIrl5.js";import"./PdfViewerOutlineSidebar-Bcdb9Ydl.js";import"./PdfViewerSidebarHeader-CkF69u8c.js";import"./useBaseUiId-D1eq_nvb.js";import"./useControlled-BhUv2c2y.js";import"./CompositeRoot-Bx7QplqV.js";import"./CompositeItem-B2vumib4.js";import"./ToolbarRootContext-U7XGc6m3.js";import"./composite-vYr7iKxA.js";import"./svgIconContainer-6zXBkUlH.js";import"./PdfViewerSearchBar-79RGDbzK.js";import"./chevron-up-zngNgD6d.js";import"./chevron-down-S3M-k2gy.js";import"./cross-DxJs6dla.js";import"./PdfViewerSidebar-DzDusr2s.js";import"./index-igxynrzH.js";import"./index-DO_Xy6GM.js";import"./index-BCuE63Ls.js";import"./PdfViewerToolbar-DOWCJPLi.js";import"./Button-Cs7xUkhF.js";import"./chevron-right-41i2kmhB.js";import"./Input-CXcN1OqN.js";import"./search-CC1z-TYa.js";import"./spin-B779MzDX.js";import"./error-BqkMjiz6.js";import"./withOsdkMetrics-Be4NSs13.js";import"./makeExternalStore-myfZT6Ru.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
