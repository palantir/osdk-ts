import{j as i}from"./iframe-rqdpvzga.js";import{O as p}from"./object-table-BNCtyvoy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-yo41SrJX.js";import"./preload-helper-BAuA-mTQ.js";import"./Table-CwI65LxP.js";import"./index-BUC_fDrj.js";import"./Dialog-N8lH9woN.js";import"./cross-CfosNt4b.js";import"./svgIconContainer-Bqq5IfTn.js";import"./useBaseUiId-DuTjnFCh.js";import"./InternalBackdrop-D13qOvQs.js";import"./composite-ccFUBUPp.js";import"./index-Cehal3kO.js";import"./index-CJWlNCvv.js";import"./index-CKSQPIZd.js";import"./useEventCallback-W4TpxVKD.js";import"./SkeletonBar-CFpFT4II.js";import"./LoadingCell-BgMCyBoq.js";import"./ColumnConfigDialog-hnZhU6Rq.js";import"./DraggableList-BLHsww-b.js";import"./search-C4ANGgTZ.js";import"./Input-C9VwIK8Z.js";import"./useControlled-BuMCf3Vd.js";import"./isEqual-DEg00wvo.js";import"./isObject-DQhWxrGR.js";import"./Button-BKVkRu72.js";import"./ActionButton-HHbEDF8p.js";import"./Checkbox-BjkRYtp6.js";import"./useValueChanged-DUFwtMjl.js";import"./CollapsiblePanel-CJc3SpYG.js";import"./MultiColumnSortDialog-DqWkkLs0.js";import"./MenuTrigger-CxxInSLp.js";import"./CompositeItem-V9zqfIF2.js";import"./ToolbarRootContext-BMRRgW4c.js";import"./getDisabledMountTransitionStyles-Ca47Gktb.js";import"./getPseudoElementBounds-C8iem-un.js";import"./chevron-down-d7yaCezV.js";import"./index-BvFYeZoL.js";import"./error-3D7_fXdm.js";import"./BaseCbacBanner-DoUsSeDI.js";import"./makeExternalStore-CszC-1tM.js";import"./Tooltip-COfWRuA_.js";import"./PopoverPopup-Cvgc4b4_.js";import"./toNumber-TWPbk2io.js";import"./useOsdkClient-DnpeN7vH.js";import"./tick-7-B_JYev.js";import"./DropdownField-DtNNkOb_.js";import"./withOsdkMetrics-CdR4X2BK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
