import{j as i}from"./iframe-BM7Q-dMJ.js";import{O as p}from"./object-table-NvF7n7Aj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D0l1Bc5m.js";import"./preload-helper-BWjcCog8.js";import"./Table-f9tZwlQt.js";import"./index-BybuAuux.js";import"./Dialog-BHcxcl7j.js";import"./cross-1-TnP1TT.js";import"./svgIconContainer-Bht8VzUd.js";import"./useBaseUiId-CwUHdvwv.js";import"./InternalBackdrop-FFPxO1CT.js";import"./composite-Lv4sNU4L.js";import"./index-SuuHTDz0.js";import"./index-B_WLJNqi.js";import"./index-Du6jQDOr.js";import"./useEventCallback-J2mmsqLg.js";import"./SkeletonBar-BRy64cL1.js";import"./LoadingCell-DK8QEcVo.js";import"./ColumnConfigDialog-CX7YBb96.js";import"./DraggableList-JJisodgs.js";import"./search-Ddrt0Hct.js";import"./Input-DfRNBHCu.js";import"./useControlled-BQdmVz8X.js";import"./Button-DPCu3lFK.js";import"./small-cross-D_EyLeAZ.js";import"./ActionButton-DKLtWYLa.js";import"./Checkbox-BZbxyuBv.js";import"./useValueChanged-CXXrYUtJ.js";import"./CollapsiblePanel-CohDmxSC.js";import"./MultiColumnSortDialog-tEraLFii.js";import"./MenuTrigger-DrVwrahJ.js";import"./CompositeItem-DlNVx4-v.js";import"./ToolbarRootContext-DKuunDH_.js";import"./getDisabledMountTransitionStyles-CFh0GbMr.js";import"./getPseudoElementBounds-CBaa1JSS.js";import"./chevron-down-DxXNwnvG.js";import"./index-D84UhGg8.js";import"./error-o6sSvsT-.js";import"./BaseCbacBanner-DO6cEyI9.js";import"./makeExternalStore-6NEmzi49.js";import"./Tooltip-BfJ9ISA3.js";import"./PopoverPopup-DLsBFnzx.js";import"./debounce-CKCnpvnv.js";import"./useOsdkClient-C9TzfZod.js";import"./tick-BbU13DjE.js";import"./DropdownField-DLHpxYXi.js";import"./isEqual-TDqzKxzH.js";import"./withOsdkMetrics-DNVP_GMx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
