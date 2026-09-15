import{j as i}from"./iframe-C-srjCzr.js";import{O as p}from"./object-table-DTnWafLM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-swbaGNgZ.js";import"./preload-helper-CdgKYpfH.js";import"./Table-DtFF-C30.js";import"./index-Bzj5y-57.js";import"./Dialog-CK0T6Acn.js";import"./cross-CBTpZY1-.js";import"./svgIconContainer-5LtXf4dR.js";import"./useBaseUiId-BU2Bdgfn.js";import"./InternalBackdrop-xwbeFan6.js";import"./composite--DZGcVxK.js";import"./index-DoGeYTl3.js";import"./index-CvZ9Zy9b.js";import"./index-BIS8E4FK.js";import"./useEventCallback-rUtIJm9R.js";import"./SkeletonBar-aX4U7JCD.js";import"./LoadingCell-DVFll7gi.js";import"./ColumnConfigDialog-itAqpP5E.js";import"./DraggableList-BZusxuwJ.js";import"./search-CESWhMh6.js";import"./Input-T5Kj4Vfz.js";import"./useControlled-BtWeYBTy.js";import"./Button-FlArcDop.js";import"./small-cross-Cdzum_ky.js";import"./ActionButton-Bm441Snm.js";import"./Checkbox-B9UnZjrC.js";import"./useValueChanged-BrnwHF-c.js";import"./CollapsiblePanel-DjeDSdHb.js";import"./MultiColumnSortDialog-7OsDRd2h.js";import"./MenuTrigger-CZX1XVyy.js";import"./CompositeItem-DAR9wsSJ.js";import"./ToolbarRootContext-8-BoPq-4.js";import"./getDisabledMountTransitionStyles-Cy56mhfk.js";import"./getPseudoElementBounds-_SRod_Ch.js";import"./chevron-down-BhL4Yc8G.js";import"./index-BiBF6oIE.js";import"./error-D5X5TRqT.js";import"./BaseCbacBanner-Bs0JLPBO.js";import"./makeExternalStore-I1nvn_9Q.js";import"./Tooltip-BNbpl33t.js";import"./PopoverPopup-D5VRMR-g.js";import"./debounce-CXlyjIaG.js";import"./useOsdkClient-SS9mW4im.js";import"./tick-C_HCxzSH.js";import"./DropdownField-DXvJF4Ed.js";import"./isEqual-DplYXKVZ.js";import"./withOsdkMetrics-ReG1NqWw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
