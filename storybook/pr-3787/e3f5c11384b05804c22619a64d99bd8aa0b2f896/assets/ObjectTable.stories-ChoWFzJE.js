import{j as i}from"./iframe-BAKEq5ES.js";import{O as p}from"./object-table-Ddwo7DKX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DMDQbSrS.js";import"./preload-helper-hQV8mcMW.js";import"./Table-DbimKmt7.js";import"./index-CeH782l-.js";import"./Dialog-Bpsn0GLy.js";import"./cross-Dt1bkvKA.js";import"./svgIconContainer-Dld9ETuT.js";import"./useBaseUiId-Brauy9uT.js";import"./InternalBackdrop-NRUCG-Md.js";import"./composite-O5N4yrKG.js";import"./index-DYnXO_K1.js";import"./index-PP-_CbbK.js";import"./index-BDWn8ZeD.js";import"./useEventCallback-BDdj97xr.js";import"./SkeletonBar-B00BTsTN.js";import"./LoadingCell-DnX7Bc7N.js";import"./ColumnConfigDialog-Dyp7TOc-.js";import"./DraggableList-D_5qh-dT.js";import"./search-DZax2fsM.js";import"./Input-BCff3WUP.js";import"./useControlled-C2UCFEFv.js";import"./isEqual-XRwfgd-m.js";import"./isObject-BZwXx0fx.js";import"./Button-BLWiXJyw.js";import"./ActionButton-3nDneS0_.js";import"./Checkbox-ooMD5k0t.js";import"./useValueChanged-BHOBEpWe.js";import"./CollapsiblePanel-DdLf54qL.js";import"./MultiColumnSortDialog-MvZfwoN0.js";import"./MenuTrigger-CICrC1Rd.js";import"./CompositeItem-B-aPUg7M.js";import"./ToolbarRootContext-yZJwFATi.js";import"./getDisabledMountTransitionStyles-BaT6iZCs.js";import"./getPseudoElementBounds-odxOPIS-.js";import"./chevron-down-DfHSBo5l.js";import"./index-Bqra-U7q.js";import"./error-BY45CvKu.js";import"./BaseCbacBanner-25jzrQhL.js";import"./makeExternalStore-DSwBTdjj.js";import"./Tooltip-bjnxpKvh.js";import"./PopoverPopup-DzJnb2E8.js";import"./toNumber-CtHLA5nh.js";import"./useOsdkClient-CAYIjkz_.js";import"./tick-CQsbinFG.js";import"./DropdownField-zarVigm0.js";import"./withOsdkMetrics-DsMB6nls.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
