import{j as i}from"./iframe-BlJB-hqv.js";import{O as p}from"./object-table-Dx1_sm97.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CODx54U8.js";import"./preload-helper-AMj6u5EH.js";import"./Table-BX9S7ZEB.js";import"./index-B5X20bPi.js";import"./Dialog-ByzDHqcR.js";import"./cross-DteZeQw8.js";import"./svgIconContainer-LeVtNk5w.js";import"./useBaseUiId-D_Y5M0eI.js";import"./InternalBackdrop-CnwxfMrX.js";import"./composite-DR-h0Lzn.js";import"./index-8mNQJ1FG.js";import"./index-BqrWcgCk.js";import"./index-DVOW4T_z.js";import"./useEventCallback-C5iZzYF4.js";import"./SkeletonBar-CHb4nNBx.js";import"./LoadingCell-B3nzhONR.js";import"./ColumnConfigDialog-ClVyxpxj.js";import"./DraggableList-CSu-P_zf.js";import"./search-VsI7BQQc.js";import"./Input-DoCeanz4.js";import"./useControlled-CETXoNMf.js";import"./Button-bd2H5948.js";import"./small-cross-CpwYw5hd.js";import"./ActionButton-DPyl9ZnK.js";import"./Checkbox-3vpggLtq.js";import"./useValueChanged-BP2yugp1.js";import"./CollapsiblePanel-1SWkbhUw.js";import"./MultiColumnSortDialog-BJARPMsx.js";import"./MenuTrigger-LXD8Yc6w.js";import"./CompositeItem-BMH16CTX.js";import"./ToolbarRootContext-Br80IfNP.js";import"./getDisabledMountTransitionStyles-D0uVHRDQ.js";import"./getPseudoElementBounds-DnmAl4RP.js";import"./chevron-down-CGFUoA8B.js";import"./index-CEuYTBSI.js";import"./error-DWdskqLp.js";import"./BaseCbacBanner-etN_nGS3.js";import"./makeExternalStore-CrrUaLlQ.js";import"./Tooltip-M7jHN8Vr.js";import"./PopoverPopup-BJoZOrql.js";import"./debounce-Cy2hjM5h.js";import"./useOsdkClient-DYR-Y9ga.js";import"./tick-Cjvc8nAS.js";import"./DropdownField-DOhdXC82.js";import"./isEqual-DU3uQxt6.js";import"./withOsdkMetrics-BbC1R7NS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
