import{j as r,M as s}from"./iframe-CzgnuvEu.js";import{P as p}from"./pdf-viewer-JQ8uwS5y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-n-Z697aK.js";import"./preload-helper-BOIiyEUV.js";import"./PdfViewer-DDNu4TYH.js";import"./index-DzE9qOqD.js";import"./BasePdfViewer-x-dMBLNC.js";import"./BasePdfViewer.module.css-B0LGQEaj.js";import"./PdfViewerAnnotationLayer-D8nvSo-C.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CKBY-TtB.js";import"./PdfViewerOutlineSidebar-DsIv_uJ8.js";import"./PdfViewerSidebarHeader-fEOrkiuH.js";import"./useBaseUiId-BVmKyOEj.js";import"./useControlled-C5aZuSIZ.js";import"./CompositeRoot-B_mZQolP.js";import"./CompositeItem-D17OeXfK.js";import"./ToolbarRootContext-DRsejA9Q.js";import"./composite-DYp9sm2c.js";import"./svgIconContainer-CqjF4WdJ.js";import"./PdfViewerSearchBar-qPK0xNWy.js";import"./chevron-up-MSLkKn0U.js";import"./chevron-down-CcjtSJSE.js";import"./cross-BZ8qiqH7.js";import"./PdfViewerSidebar-ssCNWiAv.js";import"./index-D4tXRR6m.js";import"./index-CK7PizA2.js";import"./index-8D7uARHg.js";import"./PdfViewerToolbar-Ca5hqeNe.js";import"./Button-NdiRMwUB.js";import"./chevron-right-BCadBgjI.js";import"./Input-ZYnWFBEZ.js";import"./search-Cwa3Up2s.js";import"./spin-DTT180pK.js";import"./error-Dn-b8Fhc.js";import"./withOsdkMetrics-4RonxvLU.js";import"./makeExternalStore-b-3Eu4Hx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
