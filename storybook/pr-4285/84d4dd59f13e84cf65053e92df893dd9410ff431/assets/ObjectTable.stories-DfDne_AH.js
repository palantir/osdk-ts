import{j as i}from"./iframe-BJfHzdWS.js";import{O as p}from"./object-table-l7XN4Dbb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CKV4ThfX.js";import"./preload-helper-Be4hJibr.js";import"./Table-jF1s7PG6.js";import"./index-BSLvxwbk.js";import"./Dialog-1fpEI_I_.js";import"./cross-VeKqoNmu.js";import"./svgIconContainer-BhMqWeRt.js";import"./useBaseUiId-Xn3MqoRt.js";import"./InternalBackdrop-BzTHj0lc.js";import"./composite-CrQSucJ3.js";import"./index-C38cjlXr.js";import"./index-2WXta-5x.js";import"./index-SmxUvTww.js";import"./useEventCallback-CZI3wJzb.js";import"./SkeletonBar-bDcSNPdy.js";import"./LoadingCell-BY5Z7yg9.js";import"./ColumnConfigDialog-C94jaurd.js";import"./DraggableList-BE1mk1LV.js";import"./search-BzsA8JvQ.js";import"./Input-D-4Pcd1I.js";import"./useControlled-wFQSRpl4.js";import"./Button-CRGaJZKK.js";import"./small-cross-Cz9VsZUQ.js";import"./ActionButton-oml20GK7.js";import"./Checkbox-CjRQW81g.js";import"./useValueChanged-CGAdYuDI.js";import"./CollapsiblePanel-D9aghLn1.js";import"./MultiColumnSortDialog-D6hD_uIF.js";import"./MenuTrigger-BxuUnaU_.js";import"./CompositeItem-BKpyjtDM.js";import"./ToolbarRootContext-C9Lowhby.js";import"./getDisabledMountTransitionStyles-COzoDZ6v.js";import"./getPseudoElementBounds-zMviCxRX.js";import"./chevron-down-DcDfg2mn.js";import"./index-N4ZXm_T-.js";import"./error-D3R8RgSf.js";import"./BaseCbacBanner-CmLJNbPo.js";import"./makeExternalStore-DIVL--_e.js";import"./Tooltip-C_0TZ3Gg.js";import"./PopoverPopup-CX838QZ3.js";import"./debounce-DdyhzCuY.js";import"./useOsdkClient-_bAI4gJ8.js";import"./tick-DV36iul2.js";import"./DropdownField-BpAH7R9v.js";import"./isEqual-Bsbd3Ppd.js";import"./withOsdkMetrics-DUXg2PFQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
