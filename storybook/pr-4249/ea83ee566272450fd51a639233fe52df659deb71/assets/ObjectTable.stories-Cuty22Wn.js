import{j as i}from"./iframe-BbjXXJe8.js";import{O as p}from"./object-table-qIIe7KC5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-SSGLZDeS.js";import"./preload-helper-Dey0rnvM.js";import"./Table-CqQFObec.js";import"./index-T8M7MoCf.js";import"./Dialog-BKYZxddZ.js";import"./cross-Dp3ZYAZC.js";import"./svgIconContainer-CXj_KM32.js";import"./useBaseUiId-mbBdJtd6.js";import"./InternalBackdrop-_rPH4zEA.js";import"./composite-CkO02i_E.js";import"./index-GEyymHQJ.js";import"./index-CUAZugwU.js";import"./useEventCallback-X7nCdW-s.js";import"./SkeletonBar-u6tF3ULb.js";import"./LoadingCell-BQEmBLZY.js";import"./ColumnConfigDialog-CEktYxha.js";import"./DraggableList-B2uXj8r5.js";import"./search-DjptGMSz.js";import"./Input-DcHjunbi.js";import"./useControlled-bFhbJ_tP.js";import"./Button-BYNpk4v8.js";import"./small-cross-DBHZv8Q4.js";import"./ActionButton-Bl1GvY0Q.js";import"./Checkbox-Ce0Hl-Gw.js";import"./useValueChanged-BKhoHR0i.js";import"./CollapsiblePanel-BmSgtCoP.js";import"./MultiColumnSortDialog-CQS4VGRh.js";import"./MenuTrigger-DLhgGUEr.js";import"./CompositeItem-BvxDZQma.js";import"./ToolbarRootContext-DvWxWMIg.js";import"./getDisabledMountTransitionStyles-GlMe9-WZ.js";import"./getPseudoElementBounds-BMRxbPLa.js";import"./chevron-down-5PwEHI-v.js";import"./index-D95i56Mo.js";import"./error-B5EEo1NC.js";import"./BaseCbacBanner-BA_GTGz9.js";import"./makeExternalStore-BCfu_aRm.js";import"./Tooltip-D3vptghS.js";import"./PopoverPopup-DHqupTDU.js";import"./debounce-CmbjsLVd.js";import"./useOsdkClient-DsMfreJs.js";import"./tick-C8S8ITqk.js";import"./DropdownField-DrlUCotf.js";import"./isEqual-DzrTxp38.js";import"./withOsdkMetrics-Cy91uTto.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
