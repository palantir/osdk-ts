import{j as r}from"./iframe-BRmpzCZE.js";import{O as b}from"./object-table-B4KSVeZe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BFw-YHDs.js";import{u as g}from"./useOsdkClient-BZ8Rgv97.js";import"./preload-helper-B5zwBkL_.js";import"./Table-DOE4ka-3.js";import"./index-DTo1AYJc.js";import"./Dialog-EXkgzOFJ.js";import"./cross-BrjpUCyw.js";import"./svgIconContainer-ClB0EAWF.js";import"./useBaseUiId-BWWrNU9X.js";import"./InternalBackdrop-BTcS2Uf7.js";import"./composite-BoPdrtMz.js";import"./index-CNCITnU0.js";import"./index-CuSmUnvX.js";import"./index-ypap7acm.js";import"./useEventCallback-C6Mswr5F.js";import"./SkeletonBar-DQU-rI3B.js";import"./LoadingCell-C1LUUzjB.js";import"./ColumnConfigDialog-xNqG-w0E.js";import"./DraggableList-DAZdpPIL.js";import"./search-QrPcr5Jb.js";import"./Input-DevgbnOf.js";import"./useControlled-0nxGMda2.js";import"./isEqual-DWFHPcMG.js";import"./isObject-89n0janb.js";import"./Button-D9yfxBKS.js";import"./ActionButton-B_mAo__X.js";import"./Checkbox-G_ri2pRu.js";import"./useValueChanged-HLDrTK4G.js";import"./CollapsiblePanel-BazzP6aN.js";import"./MultiColumnSortDialog-CG_tkOTM.js";import"./MenuTrigger-BLByaRZe.js";import"./CompositeItem-B9M_u-lg.js";import"./ToolbarRootContext-Czmaa9ZO.js";import"./getDisabledMountTransitionStyles-YpX2H8HK.js";import"./getPseudoElementBounds-56O41HH1.js";import"./chevron-down-9MEkRqsE.js";import"./index-DyDKdM2i.js";import"./error-Cbn_oEWX.js";import"./BaseCbacBanner-DLkybrgv.js";import"./makeExternalStore-CeZQOp3r.js";import"./Tooltip-epWC9lqd.js";import"./PopoverPopup-DjFxDqyY.js";import"./toNumber-DWulGXhk.js";import"./tick-Cxqoq0Gn.js";import"./DropdownField-DpN0Y8uc.js";import"./withOsdkMetrics-CD_RD48C.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
