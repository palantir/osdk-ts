import{j as i}from"./iframe-iqQU8bOf.js";import{O as p}from"./object-table-CLGuzBvK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dwwkp54V.js";import"./preload-helper-BsUPb6pd.js";import"./Table-BvjcAQ1n.js";import"./index-CqiIIsfb.js";import"./Dialog-D8UQASn9.js";import"./cross-BerI_bTK.js";import"./svgIconContainer-BNsXYGV2.js";import"./useBaseUiId-CpmA_-bG.js";import"./InternalBackdrop-CVRFuPTa.js";import"./composite-DdOT0bda.js";import"./index-CGAj3FTo.js";import"./index-BTBXmSST.js";import"./index-CQuthkbU.js";import"./useEventCallback-2CRWEol-.js";import"./SkeletonBar-CW-zZ-1l.js";import"./LoadingCell-D9s6QbDP.js";import"./ColumnConfigDialog-D9auHLbs.js";import"./DraggableList-B--3EQEp.js";import"./search-CaykVUN2.js";import"./Input-BRlYFZYm.js";import"./useControlled-DJ8i4enG.js";import"./isEqual-M1ueKsIc.js";import"./isObject-m-8uk5lt.js";import"./Button-DJTByFtP.js";import"./ActionButton-BcPc25rY.js";import"./Checkbox-L58W5cer.js";import"./useValueChanged-DKI8DEgp.js";import"./CollapsiblePanel-CBqaiLbh.js";import"./MultiColumnSortDialog-BIxsHsWK.js";import"./MenuTrigger-CutPpTa2.js";import"./CompositeItem-cDtNESeM.js";import"./ToolbarRootContext-BBwxdbAq.js";import"./getDisabledMountTransitionStyles-BLE9Dl1n.js";import"./getPseudoElementBounds-mTQudAgY.js";import"./chevron-down-Clf6HxH4.js";import"./index-CqkT5pyQ.js";import"./error-BwFxT3aH.js";import"./BaseCbacBanner-j46F3evV.js";import"./makeExternalStore-CKVk4GKk.js";import"./Tooltip-8UlSd3jK.js";import"./PopoverPopup-BIpN2UoJ.js";import"./toNumber-D00XgMT3.js";import"./useOsdkClient-DDjfUp_X.js";import"./tick-H9zxDrWg.js";import"./DropdownField-BnJB5e9x.js";import"./withOsdkMetrics-b_xHbubF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
