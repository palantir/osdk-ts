import{j as i}from"./iframe-D-NjJf8E.js";import{O as p}from"./object-table-CQvqHuFL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ffTX7ouP.js";import"./preload-helper-CTOkYOfH.js";import"./Table-BKmBWaKK.js";import"./index-BfNG9SBg.js";import"./Dialog-BNUju2pG.js";import"./cross-CeDP8iYL.js";import"./svgIconContainer-CGGP5dln.js";import"./useBaseUiId-fJObIM_9.js";import"./InternalBackdrop-Dr_1KZ7A.js";import"./composite-CYVlE3X-.js";import"./index-Xmptx6KB.js";import"./index-CGk_yh5o.js";import"./index-CQZ7ITuQ.js";import"./useEventCallback-SSXm1pp5.js";import"./SkeletonBar-Bx9ZEMx9.js";import"./LoadingCell-DsONRhQM.js";import"./ColumnConfigDialog-Di4_rnJ1.js";import"./DraggableList-CeyqnhqE.js";import"./search-CjsZbzMa.js";import"./Input-Djaz_ktk.js";import"./useControlled-D1sspD4r.js";import"./Button-B1_GO9AJ.js";import"./small-cross-Bxoh9LLX.js";import"./ActionButton-Ci63hB-4.js";import"./Checkbox-Blg81idJ.js";import"./useValueChanged-BPlDHc58.js";import"./CollapsiblePanel-B43m-kWy.js";import"./MultiColumnSortDialog-CUHPZh-T.js";import"./MenuTrigger-DMumYPhU.js";import"./CompositeItem-CnMema5w.js";import"./ToolbarRootContext-CUS2wfRS.js";import"./getDisabledMountTransitionStyles-9dZlZGXn.js";import"./getPseudoElementBounds-CjUxBsGr.js";import"./chevron-down-C-c1FjW5.js";import"./index-BgxA68V1.js";import"./error-BoBBM1re.js";import"./BaseCbacBanner-D8FF-_Kg.js";import"./makeExternalStore-BW52Pv17.js";import"./Tooltip-DvnHQmBq.js";import"./isObject-u4AYGR4g.js";import"./debounce-6S1krlRt.js";import"./useOsdkClient-UvBflAyV.js";import"./tick-C4vdjWJ1.js";import"./DropdownField-B0llccFH.js";import"./isEqual-DdLufpyz.js";import"./_baseIsEqual-CZ4xsHuR.js";import"./withOsdkMetrics-BLPi8trO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
