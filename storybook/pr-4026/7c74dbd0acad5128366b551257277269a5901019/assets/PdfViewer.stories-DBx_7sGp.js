import{j as r,M as s}from"./iframe-tJoiUnOU.js";import{P as p}from"./pdf-viewer-DPmAQBVp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DSjLnE-F.js";import"./preload-helper-q_roJb3L.js";import"./PdfViewer-YP0cDFU9.js";import"./index-wkjAOCKp.js";import"./BasePdfViewer-BkQvWPsZ.js";import"./BasePdfViewer.module.css-BmzEbHvH.js";import"./PdfViewerAnnotationLayer-Bgfsl7MM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BBrlKYx1.js";import"./PdfViewerOutlineSidebar-CwGeC-i7.js";import"./PdfViewerSidebarHeader-C5cOlWmQ.js";import"./useBaseUiId-BiDCPQhp.js";import"./useControlled-B_scRK6a.js";import"./CompositeRoot-DM2Hbp5W.js";import"./CompositeItem-BDVYJdc3.js";import"./ToolbarRootContext-ekETqF8a.js";import"./composite-DOEUwxcs.js";import"./svgIconContainer-D0F8gB11.js";import"./PdfViewerSearchBar-DDYZKmdb.js";import"./chevron-up-BFkKNiN6.js";import"./chevron-down-CUB7Aj2S.js";import"./cross-6Rc2LF7n.js";import"./PdfViewerSidebar-BQAYjK0j.js";import"./index-CKDcjobG.js";import"./index-D3jnN6Jh.js";import"./index-VD2PRP19.js";import"./PdfViewerToolbar-DXp-XDy_.js";import"./Button-D_5bqoFg.js";import"./chevron-right-CLzVbxwT.js";import"./Input-Dbo8bi4g.js";import"./search-CgsmrxMy.js";import"./spin-tX4yQmPy.js";import"./error-B-PeBpWB.js";import"./withOsdkMetrics-DhS6V5OD.js";import"./makeExternalStore-nQCgHpFY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
