import{j as i}from"./iframe-B6AjvOVJ.js";import{O as p}from"./object-table-BEU4RzJ9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ggB9xn77.js";import"./preload-helper-CgjhIKiB.js";import"./Table-CG40JWX8.js";import"./index-DLHnDDYV.js";import"./Dialog-BMr-kk7T.js";import"./cross-W_gu-k5J.js";import"./svgIconContainer-DL0f4zVF.js";import"./useBaseUiId-BduiX7-m.js";import"./InternalBackdrop-DSek19Mb.js";import"./composite-DnmLy1Yk.js";import"./index-Czlm1Cio.js";import"./index-DmwPHze2.js";import"./index-5tpEsUz9.js";import"./useEventCallback-C1lUOTp3.js";import"./SkeletonBar-COJfbiAQ.js";import"./LoadingCell-BHnENJfD.js";import"./ColumnConfigDialog-DLrdRfDT.js";import"./DraggableList-ClAdpW9r.js";import"./search-Dfb92URe.js";import"./Input-m4NvHU99.js";import"./useControlled-D_wxWQiO.js";import"./Button-BGD9VvG8.js";import"./small-cross-Dr1GEPUD.js";import"./ActionButton-BrQB1W26.js";import"./Checkbox-BjVyekTl.js";import"./useValueChanged-ciY3IUlT.js";import"./CollapsiblePanel-CFux4x-H.js";import"./MultiColumnSortDialog-liyRDpcW.js";import"./MenuTrigger-BsP6FL4S.js";import"./CompositeItem-D9TRpIPa.js";import"./ToolbarRootContext-DmnnlMoA.js";import"./getDisabledMountTransitionStyles-BKsVeh9x.js";import"./getPseudoElementBounds-BT_PONuM.js";import"./chevron-down-Defp8KA-.js";import"./index-oQs3Ep3f.js";import"./error-r1aNeJUF.js";import"./BaseCbacBanner-BsOXdwJ3.js";import"./makeExternalStore-CQVb-Jjn.js";import"./Tooltip-CFccCkAV.js";import"./PopoverPopup-Dt-LXHdl.js";import"./debounce-CoGZo14Z.js";import"./useOsdkClient-IHshgW8j.js";import"./tick-C-Ai1Rfc.js";import"./DropdownField-BFwJYvJy.js";import"./useDebouncedCallback-Dwlualwj.js";import"./withOsdkMetrics-D8uoMkfq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
