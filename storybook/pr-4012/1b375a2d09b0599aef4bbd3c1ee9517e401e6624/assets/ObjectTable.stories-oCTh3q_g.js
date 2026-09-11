import{j as i}from"./iframe-BHMJk_pQ.js";import{O as p}from"./object-table-CEwmRrXK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BT7dNVPv.js";import"./preload-helper-yZDhH5uY.js";import"./Table-d8i9MRUg.js";import"./index-CGIFCVjE.js";import"./Dialog-DxVtYtNu.js";import"./cross-Ca7k_LyQ.js";import"./svgIconContainer-EnhuaKpb.js";import"./useBaseUiId-q1ez9o9O.js";import"./InternalBackdrop-BiA6TLUL.js";import"./composite-vsetCZGp.js";import"./index-DlggJEEa.js";import"./index-CzKMl-a_.js";import"./index-CpCHJENW.js";import"./useEventCallback-xm841LUs.js";import"./SkeletonBar-CzOTj0Px.js";import"./LoadingCell-B7ZMIDfw.js";import"./ColumnConfigDialog-BWEen_Od.js";import"./DraggableList-VFAUNwz9.js";import"./search-BSgVHkt6.js";import"./Input-Bs3tYIFL.js";import"./useControlled-CoWycKh2.js";import"./Button-agVfxQZq.js";import"./small-cross-_-iQX0fq.js";import"./ActionButton-B-A1N2em.js";import"./Checkbox-BSj_-O_d.js";import"./useValueChanged-DbGFjP29.js";import"./CollapsiblePanel-DfUPQ-ZF.js";import"./MultiColumnSortDialog-BzHnW22D.js";import"./MenuTrigger-D-rANtVw.js";import"./CompositeItem-C-ykAJ2x.js";import"./ToolbarRootContext-eWmTNPN4.js";import"./getDisabledMountTransitionStyles-D8ahXwaA.js";import"./getPseudoElementBounds-CbcE4Eyu.js";import"./chevron-down-DAwRR1Ih.js";import"./index-DYYPIily.js";import"./error-DwwBySlx.js";import"./BaseCbacBanner-C_uEXybe.js";import"./makeExternalStore-BvwVYkGq.js";import"./Tooltip-8-o0FWqB.js";import"./PopoverPopup-B7XXhvdV.js";import"./debounce-CB6HZpU1.js";import"./useOsdkClient-BikzBIxv.js";import"./tick-DGaeG0X3.js";import"./DropdownField-C0pXdzvg.js";import"./isEqual-DK9oB8Fi.js";import"./withOsdkMetrics-Bfl9jveo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
