import{j as i}from"./iframe-BJzVVo3C.js";import{O as p}from"./object-table-iloeXTiv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-O5mlbI6r.js";import"./preload-helper-BGo6yCWR.js";import"./Table-Q7vMfUTJ.js";import"./index-jYeXRVJt.js";import"./Dialog-Cat5-d5T.js";import"./cross-BODoIHG7.js";import"./svgIconContainer-BafRnCSe.js";import"./useBaseUiId-aWvq-Ojy.js";import"./InternalBackdrop-LaTt__SN.js";import"./composite-DVXx00LN.js";import"./index-Cu3TSrS7.js";import"./index-DY-H4zuh.js";import"./index-CGlZ0CTP.js";import"./useEventCallback-CPVPsHDE.js";import"./SkeletonBar-CmmIOnV3.js";import"./LoadingCell-u13Tws5Z.js";import"./ColumnConfigDialog-DzZb_NDG.js";import"./DraggableList-BnBPKCgQ.js";import"./search-CNzRQSLi.js";import"./Input-D8VZz3qg.js";import"./useControlled-BU_ZAQ-v.js";import"./Button-CtA29Am0.js";import"./small-cross-CIrD0bDh.js";import"./ActionButton-DNcn8P02.js";import"./Checkbox-D7r-WuhL.js";import"./useValueChanged-CnANt21_.js";import"./CollapsiblePanel-BbVSWDIY.js";import"./MultiColumnSortDialog-bPERNjQE.js";import"./MenuTrigger-C0sRySoL.js";import"./CompositeItem-UocH3YCc.js";import"./ToolbarRootContext-BS8U1N_y.js";import"./getDisabledMountTransitionStyles-DruUCqOL.js";import"./getPseudoElementBounds-BuOaNQX4.js";import"./chevron-down-GN6eodao.js";import"./index-C038wilx.js";import"./error-B0Rx4D9Q.js";import"./BaseCbacBanner--Vy8vTm4.js";import"./makeExternalStore-c77j8ZZC.js";import"./Tooltip-DwG0NqTz.js";import"./PopoverPopup-CbiEHiO_.js";import"./debounce-DqxAIWi9.js";import"./useOsdkClient-C7mnWl4M.js";import"./tick-C1AZecKl.js";import"./DropdownField-C9P6RcpY.js";import"./isEqual-DffZPRyo.js";import"./withOsdkMetrics-BD3BFsPk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
