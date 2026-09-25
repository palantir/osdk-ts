import{j as i}from"./iframe-BcZul-5h.js";import{O as p}from"./object-table-Dzwk_2Gi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BLcix5bc.js";import"./preload-helper-CmDzzbHA.js";import"./Table-B1bcSvHC.js";import"./index-DzJXuXA1.js";import"./Dialog-Dj7pNKUw.js";import"./cross-C_wTApPn.js";import"./svgIconContainer-RYnvKxQV.js";import"./useBaseUiId-BR4pV0Lr.js";import"./InternalBackdrop-C0gIi10e.js";import"./composite-C_4CRh4u.js";import"./index-CWco2ihj.js";import"./index-pZeQx-_G.js";import"./index-Dfw9WA6q.js";import"./useEventCallback-DFzPAd8H.js";import"./SkeletonBar-DggSgXIE.js";import"./LoadingCell-DCt4Pvwc.js";import"./ColumnConfigDialog-D_snSl5m.js";import"./DraggableList-B4ziAGpQ.js";import"./search-Bzu1qjP_.js";import"./Input--zoqJ2tF.js";import"./useControlled-eXBZEo_R.js";import"./Button-soVXPdsa.js";import"./small-cross-BBM4HGVx.js";import"./ActionButton-Kn6WAFbI.js";import"./Checkbox-CBlNrCa1.js";import"./useValueChanged-DndjiTPh.js";import"./CollapsiblePanel-CpZxtz3Z.js";import"./MultiColumnSortDialog-B01vzk6O.js";import"./MenuTrigger-DTrLq3FS.js";import"./CompositeItem-DOpNxc2s.js";import"./ToolbarRootContext-BozYkP2N.js";import"./getDisabledMountTransitionStyles-DGAUIi0f.js";import"./getPseudoElementBounds-BxdRzYrq.js";import"./chevron-down-BTve9A2e.js";import"./index-C_ypGm3c.js";import"./error-BtC0qV1A.js";import"./BaseCbacBanner-eu0_CWGy.js";import"./makeExternalStore-BaDKsdYc.js";import"./Tooltip-8yNzGMPy.js";import"./PopoverPopup-DLNnlymE.js";import"./debounce-DtvbDRTR.js";import"./useOsdkClient-tWgMlPel.js";import"./tick-D_V44cYu.js";import"./DropdownField-DSLZwGzV.js";import"./isEqual-CAB2zIeK.js";import"./withOsdkMetrics-C8vp2Jz9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
