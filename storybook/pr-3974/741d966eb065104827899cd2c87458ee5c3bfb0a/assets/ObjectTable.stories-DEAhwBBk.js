import{j as i}from"./iframe-B_oy6e6M.js";import{O as p}from"./object-table-Du3yIVEE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D6qnU3ur.js";import"./preload-helper-CWVJ8YRK.js";import"./Table-DEfKmmNN.js";import"./index-DZJD6sDp.js";import"./Dialog-BBAPdTrB.js";import"./cross-DSgNe7Mr.js";import"./svgIconContainer-C6P8MOfd.js";import"./useBaseUiId-POvatS82.js";import"./InternalBackdrop-Dp2uHLRa.js";import"./composite-ZAoedBeg.js";import"./index-T8MVz2I4.js";import"./index-CS3PWFhc.js";import"./index-D-0Q_ZIA.js";import"./useEventCallback-DYFfeE7x.js";import"./SkeletonBar-D6M-u8eM.js";import"./LoadingCell-BoT4vmnz.js";import"./ColumnConfigDialog-TYSu0W40.js";import"./DraggableList-DGByefv8.js";import"./search-DCED0BUt.js";import"./Input-DTC7T4Cz.js";import"./useControlled-zA33IEOZ.js";import"./Button-CrOvgvfA.js";import"./small-cross-QUZC1axO.js";import"./ActionButton-CH9G9AI1.js";import"./Checkbox-Cim-DUIZ.js";import"./useValueChanged-mZg_qe7l.js";import"./CollapsiblePanel-YftoqHFR.js";import"./MultiColumnSortDialog-BWXP5wwp.js";import"./MenuTrigger-SGHREb-3.js";import"./CompositeItem-C4ZzMkp4.js";import"./ToolbarRootContext-DJgLJnil.js";import"./getDisabledMountTransitionStyles-x7AHHcyr.js";import"./getPseudoElementBounds-DZ3pLnsf.js";import"./chevron-down-rpYvjBzs.js";import"./index-BXsPCItr.js";import"./error-BNXYH_2v.js";import"./BaseCbacBanner-XuLOXO9d.js";import"./makeExternalStore-A3uWrp0V.js";import"./Tooltip-DbdokS7N.js";import"./PopoverPopup-a2ucjmTV.js";import"./debounce-ZroeBVII.js";import"./useOsdkClient-Dux18aMq.js";import"./tick-BcOBtFgu.js";import"./DropdownField--s7bes0M.js";import"./isEqual-CPn_97Mq.js";import"./withOsdkMetrics-C137OdQw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
