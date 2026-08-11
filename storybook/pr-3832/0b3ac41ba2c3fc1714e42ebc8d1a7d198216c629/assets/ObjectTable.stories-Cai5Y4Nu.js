import{j as i}from"./iframe-Bq08WkX6.js";import{O as p}from"./object-table-CBEEYibu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DnkfPNpb.js";import"./preload-helper-CzbD-Dkq.js";import"./Table-BN4XpBnX.js";import"./index-15tgvzIh.js";import"./Dialog-DVLXkLrf.js";import"./cross-D7wZ2dNk.js";import"./svgIconContainer-BsfTAwTI.js";import"./useBaseUiId-D80yW2NB.js";import"./InternalBackdrop-Bm4mdBfi.js";import"./composite-DQ3jHuKN.js";import"./index-DM3xTDXQ.js";import"./index-CUtG1M-d.js";import"./index-CSliVaa9.js";import"./useEventCallback-DStUoWzh.js";import"./SkeletonBar-Bd0kxzdZ.js";import"./LoadingCell-BOxDb49A.js";import"./ColumnConfigDialog-DlaDcvzi.js";import"./DraggableList-DyCmlC_X.js";import"./search-CsWrT34i.js";import"./Input-BAP4LU5T.js";import"./useControlled-DZI1tbIH.js";import"./isEqual-B97z0_Vd.js";import"./isObject-Cynw8Plv.js";import"./Button-f9Giaknz.js";import"./ActionButton-BsBOT6Ps.js";import"./Checkbox-BvDCJt0H.js";import"./useValueChanged-Q78KmwEB.js";import"./CollapsiblePanel-DOlT5hzg.js";import"./MultiColumnSortDialog-jXZXIEnN.js";import"./MenuTrigger-t0nn8x8v.js";import"./CompositeItem-D9XKb7P8.js";import"./ToolbarRootContext-C36v0QgL.js";import"./getDisabledMountTransitionStyles-C_rTqAIJ.js";import"./getPseudoElementBounds-n7-i415r.js";import"./chevron-down-B3lt0Bn5.js";import"./index-DC9h8Vk1.js";import"./error-CJJkcl9r.js";import"./BaseCbacBanner-dDgY6GdX.js";import"./makeExternalStore-TiqtXy3q.js";import"./Tooltip-BrAy_wST.js";import"./PopoverPopup-D157sLef.js";import"./toNumber-VDnaXJ38.js";import"./useOsdkClient-B6U8ncOQ.js";import"./tick-D_vzxwlx.js";import"./DropdownField-B-n_Gvm6.js";import"./withOsdkMetrics-C32CoUwf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
