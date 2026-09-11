import{j as r,M as s}from"./iframe-R3i6F3aO.js";import{P as p}from"./pdf-viewer-BmHw7LUK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CVszvSxn.js";import"./preload-helper-C9bdGnH6.js";import"./PdfViewer-DtQWOqla.js";import"./index-BGblgBJY.js";import"./BasePdfViewer-C5w-jUZ2.js";import"./BasePdfViewer.module.css-BWcTPXCf.js";import"./PdfViewerAnnotationLayer-CccGWoEU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfREj3Ky.js";import"./PdfViewerOutlineSidebar-DDTDUqiE.js";import"./PdfViewerSidebarHeader-BODYfQY3.js";import"./useBaseUiId-Bs3UtHPs.js";import"./useControlled-CF852Dip.js";import"./CompositeRoot-P_8GH8jt.js";import"./CompositeItem-CwiOxIme.js";import"./ToolbarRootContext-CwgLFLhe.js";import"./composite-DqPiEnK1.js";import"./svgIconContainer-C5apQk5w.js";import"./PdfViewerSearchBar-yqJbgwzb.js";import"./chevron-up-EgAqti5Q.js";import"./chevron-down-DiJ60wr5.js";import"./cross-BPxLtSBw.js";import"./PdfViewerSidebar-J0z8ga2r.js";import"./index-DRFmYbvw.js";import"./index-FYBTDmiA.js";import"./index-BcSLoxTr.js";import"./PdfViewerToolbar-BUcA7-QL.js";import"./Button-DHONR1q8.js";import"./chevron-right-B9j7CWCG.js";import"./Input-sn4ChjOn.js";import"./search-CLosiH11.js";import"./spin-BgEUSPbb.js";import"./error-DSevPCVz.js";import"./withOsdkMetrics-D6yaQzlx.js";import"./makeExternalStore-BNMggstW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
