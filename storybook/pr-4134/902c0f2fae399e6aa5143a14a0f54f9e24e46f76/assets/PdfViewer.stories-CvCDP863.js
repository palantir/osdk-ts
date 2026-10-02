import{j as r,M as s}from"./iframe-Bhu5go17.js";import{P as p}from"./pdf-viewer-D3XLwsrs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BVUKHlKz.js";import"./preload-helper-BSWPIZ9o.js";import"./PdfViewer-BPu2L1FM.js";import"./index-BczdwF9K.js";import"./BasePdfViewer-CktkFvvS.js";import"./BasePdfViewer.module.css-BApugL3U.js";import"./PdfViewerAnnotationLayer-C89rDLu-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfzmCxv6.js";import"./PdfViewerOutlineSidebar-DJIs7x7Z.js";import"./PdfViewerSidebarHeader-CLna2U74.js";import"./useBaseUiId-DjMEAOTb.js";import"./useControlled-BGnzZuWo.js";import"./CompositeRoot-DpRdut-O.js";import"./CompositeItem-Jhmf5Smc.js";import"./ToolbarRootContext-B9BOuPbm.js";import"./composite-uZlHnppD.js";import"./svgIconContainer-Bcnn9wIP.js";import"./PdfViewerSearchBar-Dgt_KW_k.js";import"./chevron-up-C9DJ2khF.js";import"./chevron-down-CB9qX917.js";import"./cross-CkWL52XL.js";import"./PdfViewerSidebar-BLRlDE-i.js";import"./index-CT7iTPId.js";import"./index-CuqdVt9a.js";import"./index-BWunv9eA.js";import"./PdfViewerToolbar-7gw5PNBj.js";import"./Button-DVcXfrSy.js";import"./chevron-right-CqfOoqxs.js";import"./Input-BJnqdqBy.js";import"./search-x6Mg2DJR.js";import"./spin-PpRmqX09.js";import"./error-DUAUa5ZT.js";import"./withOsdkMetrics-pTv3z3ht.js";import"./makeExternalStore-BTwq4qvu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
