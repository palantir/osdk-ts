import{j as i}from"./iframe-CNaoCaD-.js";import{O as p}from"./object-table-Dv8WFw4M.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bfn2j6k0.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CJJJF1mi.js";import"./index-D0c6s8Wh.js";import"./Dialog-CYE5QabX.js";import"./cross-BAAhVfqY.js";import"./svgIconContainer-DMxMunFc.js";import"./useBaseUiId-BLzWWyTo.js";import"./InternalBackdrop-DyZTC2Np.js";import"./composite-DI12gblL.js";import"./index-CO70LKAy.js";import"./index-bkL56BYD.js";import"./index-CSDWflQO.js";import"./useEventCallback-BrzJPUe-.js";import"./SkeletonBar-CtWeGlbs.js";import"./LoadingCell-DUGd5kLz.js";import"./ColumnConfigDialog-VZ7pVwTS.js";import"./DraggableList-CRMLmkvs.js";import"./search-ORWNQV-Y.js";import"./Input-BBHZGssD.js";import"./useControlled-DxXwsmI6.js";import"./Button-DnaSBDda.js";import"./small-cross-C9OctJ-L.js";import"./ActionButton-ZoDGCRxC.js";import"./Checkbox-BRNaMGYm.js";import"./useValueChanged-utG5gEoU.js";import"./CollapsiblePanel-DOMeHPZv.js";import"./MultiColumnSortDialog-_dMBWUMX.js";import"./MenuTrigger-BmwUumsZ.js";import"./CompositeItem-DGSUi3Oj.js";import"./ToolbarRootContext-C6YFR30y.js";import"./getDisabledMountTransitionStyles-D7USJ7g2.js";import"./getPseudoElementBounds-CYw6K46U.js";import"./chevron-down-LMtkkQTV.js";import"./index-CbXbemY1.js";import"./error-CEVIMozV.js";import"./BaseCbacBanner-BB1L2uA5.js";import"./makeExternalStore-DdM6Dx34.js";import"./Tooltip-Dt3tWdRA.js";import"./PopoverPopup-BPcvF2qn.js";import"./debounce-9NycXt_B.js";import"./useOsdkClient-D_c3zo70.js";import"./tick-DOziRHZF.js";import"./DropdownField-BSsZW_49.js";import"./isEqual-DZnhSfZI.js";import"./withOsdkMetrics-C088wNt_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
