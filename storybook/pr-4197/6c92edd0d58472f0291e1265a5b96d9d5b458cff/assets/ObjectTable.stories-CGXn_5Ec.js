import{j as i}from"./iframe-DaG_CcyR.js";import{O as p}from"./object-table-CAwIAc9q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D76PMd99.js";import"./preload-helper-fLmgAqZC.js";import"./Table-D_3f6Cnq.js";import"./index-C2NmqeV8.js";import"./Dialog-Cr9cP_TA.js";import"./cross-CBdyBq1j.js";import"./svgIconContainer-DJ0pmdAm.js";import"./useBaseUiId-BfCzIxwR.js";import"./InternalBackdrop-Xfh57IbA.js";import"./composite-DNA29nNr.js";import"./index-BC4OQi8j.js";import"./index-BRmwEG4U.js";import"./index-DTO5Sk8o.js";import"./useEventCallback-DbVVChUJ.js";import"./SkeletonBar-Bde_r25-.js";import"./LoadingCell-Bk_9YcjT.js";import"./ColumnConfigDialog-D43GInSE.js";import"./DraggableList-97mhnMvH.js";import"./search-C70hm_cR.js";import"./Input-B0e0EOXI.js";import"./useControlled-CiDIFyuy.js";import"./Button-BJNxKAu7.js";import"./small-cross-C40mmEcZ.js";import"./ActionButton-ColeB5wb.js";import"./Checkbox-CxZvxvMQ.js";import"./useValueChanged-CemEV-be.js";import"./CollapsiblePanel-BYNa9rT6.js";import"./MultiColumnSortDialog-D9X6OCW7.js";import"./MenuTrigger-Z1aY7CnD.js";import"./CompositeItem-BBL8fhGk.js";import"./ToolbarRootContext-D3JANhpq.js";import"./getDisabledMountTransitionStyles-BMXryHBN.js";import"./getPseudoElementBounds-BPw6WX_a.js";import"./chevron-down-D4cFhIOL.js";import"./index-DZsXV9bE.js";import"./error-Cof-i4TZ.js";import"./BaseCbacBanner-B0FW0Tpc.js";import"./makeExternalStore-BWD8JKLV.js";import"./Tooltip-zVk-Ezfu.js";import"./PopoverPopup-DeS6RrmG.js";import"./debounce-DfSAoJ4z.js";import"./useOsdkClient-CcDhxIX1.js";import"./tick-XdOXkQOZ.js";import"./DropdownField-D9Cmijub.js";import"./isEqual-DANNBGVZ.js";import"./withOsdkMetrics-CplHDg7O.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
