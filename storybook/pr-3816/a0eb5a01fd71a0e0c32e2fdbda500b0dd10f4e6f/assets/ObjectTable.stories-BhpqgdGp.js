import{j as i}from"./iframe-BUEP5_KN.js";import{O as p}from"./object-table-DsgKjrEY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BTHyvNXJ.js";import"./preload-helper-BCZ0e6Bx.js";import"./Table-C2pSHfCx.js";import"./index-Cv5GbN86.js";import"./Dialog-BKn-ZTlZ.js";import"./cross-BFI2c1gT.js";import"./svgIconContainer-BxBMhXhK.js";import"./useBaseUiId-CtzwQFB0.js";import"./InternalBackdrop-0AgP2Frr.js";import"./composite-CRlO-KKn.js";import"./index-BFlpobHB.js";import"./index-C5qosZUE.js";import"./index-CWhxk_VF.js";import"./useEventCallback-C1Zgw4Ky.js";import"./SkeletonBar-GFqMzlNc.js";import"./LoadingCell-DgzNywjO.js";import"./ColumnConfigDialog-D0EGSflz.js";import"./DraggableList-PUeo89lO.js";import"./search-ug0_eoW4.js";import"./Input-Bnyr3ygR.js";import"./useControlled-PKwq7ae5.js";import"./isEqual-DuiBvV2G.js";import"./isObject-DY1gTwAG.js";import"./Button-BSn-_RfD.js";import"./ActionButton-D5yLikE9.js";import"./Checkbox-D0bYA1uK.js";import"./useValueChanged-TybsbpVT.js";import"./CollapsiblePanel-70q2W7BX.js";import"./MultiColumnSortDialog-zP5bDXpD.js";import"./MenuTrigger--G7NFvZU.js";import"./CompositeItem-C6hNbQz3.js";import"./ToolbarRootContext-BnGkTKD4.js";import"./getDisabledMountTransitionStyles-Dfr23WDG.js";import"./getPseudoElementBounds-F4tv6nV9.js";import"./chevron-down-BLw7EeHj.js";import"./index-B16c37PX.js";import"./error-CGouaaOn.js";import"./BaseCbacBanner-CCEIv-FS.js";import"./makeExternalStore-BQTvyZx_.js";import"./Tooltip-BMIm9wqW.js";import"./PopoverPopup-I_I-0Ao-.js";import"./toNumber-BkzfzitC.js";import"./useOsdkClient-CVJbm5_v.js";import"./tick-DqD8ipnV.js";import"./DropdownField-SVotLH5l.js";import"./withOsdkMetrics-B5ElZfNl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
