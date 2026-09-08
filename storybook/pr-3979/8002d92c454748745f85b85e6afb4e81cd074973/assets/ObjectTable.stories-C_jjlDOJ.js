import{j as i}from"./iframe-Ba48eLUQ.js";import{O as p}from"./object-table-Cc5o22dm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4YVVarD.js";import"./preload-helper-BcQJohn9.js";import"./Table-DasDiIGO.js";import"./index-Biav_Ly4.js";import"./Dialog-BkRI-Gh0.js";import"./cross-CZ3u7Zqk.js";import"./svgIconContainer-Dsy6R3Hn.js";import"./useBaseUiId-BqKeDKog.js";import"./InternalBackdrop-mjZPCf-I.js";import"./composite--55ShNCx.js";import"./index-mue2Ao73.js";import"./index-D49E4xW3.js";import"./index-Btzr8NAV.js";import"./useEventCallback-DAMcGMad.js";import"./SkeletonBar-BU-AQLAZ.js";import"./LoadingCell-Cbi1YDrG.js";import"./ColumnConfigDialog-CoMhZSPA.js";import"./DraggableList-CxwNGygN.js";import"./search-6WIx7b7M.js";import"./Input-J_HicyGE.js";import"./useControlled-Ci9ghEUN.js";import"./Button-DS_jYoZ2.js";import"./small-cross-8kU3x62z.js";import"./ActionButton-DL_leNOj.js";import"./Checkbox-D6r5q9c3.js";import"./useValueChanged-CEkuFjgw.js";import"./CollapsiblePanel-wpg_ooMH.js";import"./MultiColumnSortDialog-C09lEdUu.js";import"./MenuTrigger-CZ9J3ztO.js";import"./CompositeItem-vF0jzrVV.js";import"./ToolbarRootContext-yUsbv0N5.js";import"./getDisabledMountTransitionStyles-A33dEllz.js";import"./getPseudoElementBounds-COwLqwqt.js";import"./chevron-down-Dcg5i-52.js";import"./index-D7LGUR6n.js";import"./error-BM0l7F7K.js";import"./BaseCbacBanner-B7P9dWFP.js";import"./makeExternalStore-CTyMzwZg.js";import"./Tooltip-lY5sugsw.js";import"./PopoverPopup-BneJBWwl.js";import"./debounce-C6KffEiQ.js";import"./useOsdkClient-Bo-oAXnj.js";import"./tick-fCO77waV.js";import"./DropdownField-Bwr07i8-.js";import"./isEqual-D13mUSuI.js";import"./withOsdkMetrics-Cul3xOyv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
