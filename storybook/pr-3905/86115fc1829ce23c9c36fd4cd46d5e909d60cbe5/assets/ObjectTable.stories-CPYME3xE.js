import{j as i}from"./iframe-ziUSJnwy.js";import{O as p}from"./object-table-DIN7uWyp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-LpaMvRSD.js";import"./preload-helper-BuN24SoO.js";import"./Table-Dgfcqnfg.js";import"./index-CofRb435.js";import"./Dialog-HvMzrP78.js";import"./cross-qr7W_6_t.js";import"./svgIconContainer-CVAk4TRf.js";import"./useBaseUiId-CfgyXuT7.js";import"./InternalBackdrop-BFNKUBx6.js";import"./composite-B-iJfWjd.js";import"./index-BeBWWYC4.js";import"./index-GXn-EEA0.js";import"./index-Dw3f6soD.js";import"./useEventCallback-Ci-2alAV.js";import"./SkeletonBar-CVuKWZbV.js";import"./LoadingCell-Ca5rfC2C.js";import"./ColumnConfigDialog-zTJ2_YbE.js";import"./DraggableList-BJkalH0x.js";import"./search-Bq-nYqiG.js";import"./Input-CdoGUrWH.js";import"./useControlled-DAbqRBrS.js";import"./Button-Dz5QTyfP.js";import"./small-cross-BdTVcWFk.js";import"./ActionButton-DmhmAAWy.js";import"./Checkbox-e0bj7BRR.js";import"./useValueChanged-DmnUfFBq.js";import"./CollapsiblePanel-CjYKtB9S.js";import"./MultiColumnSortDialog-CHKsjqSY.js";import"./MenuTrigger-DFdmP4ss.js";import"./CompositeItem-DJZZYhWP.js";import"./ToolbarRootContext-CLVK9GrX.js";import"./getDisabledMountTransitionStyles-B8iM4Qj3.js";import"./getPseudoElementBounds-DSOY-nc_.js";import"./chevron-down-DRwdNHrM.js";import"./index-VK3LiRtU.js";import"./error-CoOP9LKe.js";import"./BaseCbacBanner-BbtvZTks.js";import"./makeExternalStore-3WvhH1w0.js";import"./Tooltip-BsAin3uT.js";import"./PopoverPopup-CZ2P9khY.js";import"./debounce-CxnNLLFT.js";import"./useOsdkClient-z2aBN953.js";import"./tick-1XWTW8zZ.js";import"./DropdownField-6Fq2zGY2.js";import"./isEqual-CHTlQ9Xo.js";import"./withOsdkMetrics-CpHsbthC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
