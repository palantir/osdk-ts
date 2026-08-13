import{j as i}from"./iframe-DV_FvNkW.js";import{O as p}from"./object-table-DBmCBesk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-bcdxIqJv.js";import"./preload-helper-BArELN5X.js";import"./Table-BcGKXj_n.js";import"./index-BLvj8uzS.js";import"./Dialog-C_TZGJh8.js";import"./cross-JLut_rtX.js";import"./svgIconContainer-CK52f1Bh.js";import"./useBaseUiId-DZEvNQMB.js";import"./InternalBackdrop-CJZRfENn.js";import"./composite-GUdKrYKt.js";import"./index-D2s-C-iU.js";import"./index-DUDZNy0X.js";import"./index-gtkvlodh.js";import"./useEventCallback-Cgmwy5UD.js";import"./SkeletonBar-Bi5m-WwI.js";import"./LoadingCell-CrYdp2fb.js";import"./ColumnConfigDialog-S-CuKGO1.js";import"./DraggableList-CWEVxQVF.js";import"./search-1jaslfQq.js";import"./Input-WondKUmM.js";import"./useControlled-CjcZvg90.js";import"./isEqual-DnamcrPx.js";import"./isObject-B1GZY_rQ.js";import"./Button-CDeNX6hI.js";import"./ActionButton-DIxaviUO.js";import"./Checkbox-Cg_iqv7P.js";import"./useValueChanged-MoTm1s5g.js";import"./CollapsiblePanel-DUEqKjo8.js";import"./MultiColumnSortDialog-oMxfvcXd.js";import"./MenuTrigger-B6nmWU4b.js";import"./CompositeItem-B9cGFmy6.js";import"./ToolbarRootContext-DhlEIOBQ.js";import"./getDisabledMountTransitionStyles-C3QZqvkg.js";import"./getPseudoElementBounds-BOWuNL3O.js";import"./chevron-down-CZeNdi1s.js";import"./index-DJXI62-C.js";import"./error-BkuU0fxo.js";import"./BaseCbacBanner-BzFkCYx7.js";import"./makeExternalStore-BAiQukHm.js";import"./Tooltip-BP-iOfCT.js";import"./PopoverPopup-KsgDK_Va.js";import"./toNumber-xsn9SK-M.js";import"./useOsdkClient-D2BQ36-h.js";import"./tick-Dc2VpgGC.js";import"./DropdownField-Dj7YH9Q-.js";import"./withOsdkMetrics-CaJhDKNf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
