import{j as i}from"./iframe-DFu988a9.js";import{O as p}from"./object-table-bEsZnepU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BiOPI8e4.js";import"./preload-helper-Ct8docw7.js";import"./Table-BrsdB9KA.js";import"./index-DtOhOCRY.js";import"./Dialog-tM8zvQcb.js";import"./cross-CTTF3yR9.js";import"./svgIconContainer-HyV1TJqY.js";import"./useBaseUiId-DfpfcE5B.js";import"./InternalBackdrop-DpxPfaGd.js";import"./composite-CqpVVzkR.js";import"./index-oZKnD5HE.js";import"./index-B1t2YxMt.js";import"./index-CkBJ6EJa.js";import"./useEventCallback-W1QvEMUe.js";import"./SkeletonBar-DjgWC4S2.js";import"./LoadingCell-ddXxCcm9.js";import"./ColumnConfigDialog-DIqFtw19.js";import"./DraggableList-DFuo8Shv.js";import"./search-IsQI8GuL.js";import"./Input-BESoTzvx.js";import"./useControlled-yPSACah0.js";import"./Button-6zqiKmKY.js";import"./small-cross-fz8OFb0W.js";import"./ActionButton-Dzobjq1d.js";import"./Checkbox-BD4Nf9SM.js";import"./useValueChanged-CYbng77M.js";import"./CollapsiblePanel-CpkVrlz9.js";import"./MultiColumnSortDialog-DE9pbNYw.js";import"./MenuTrigger-BpsMCIxo.js";import"./CompositeItem-DmVR8xyg.js";import"./ToolbarRootContext-C15MGeq9.js";import"./getDisabledMountTransitionStyles-C3yZ6yy9.js";import"./getPseudoElementBounds-BIueGgLb.js";import"./chevron-down-NXTIxDJ_.js";import"./index-Dsc2iZcF.js";import"./error-DqAZcTwE.js";import"./BaseCbacBanner-Bfv7AWzP.js";import"./makeExternalStore-D9C8VaXr.js";import"./Tooltip-BTqW7Tma.js";import"./PopoverPopup-CW_pGXjQ.js";import"./debounce-CabyEDng.js";import"./useOsdkClient-D2jZVLbn.js";import"./tick-BR3rer0s.js";import"./DropdownField-CF3gsiae.js";import"./isEqual-CF6RhxlN.js";import"./withOsdkMetrics-BYOAqz11.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
