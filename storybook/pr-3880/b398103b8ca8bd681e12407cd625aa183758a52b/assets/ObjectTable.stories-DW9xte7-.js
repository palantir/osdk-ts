import{j as i}from"./iframe-iQYe401C.js";import{O as p}from"./object-table-CQAKZvn7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DSzrhooB.js";import"./preload-helper-BJxdJnS2.js";import"./Table-CZW6W3yy.js";import"./index-Cj4wtDol.js";import"./Dialog-CBrFYyiH.js";import"./cross-TYvUZ_zv.js";import"./svgIconContainer-D--fuUS3.js";import"./useBaseUiId-BaHVsYFy.js";import"./InternalBackdrop-S4bmd6Lm.js";import"./composite-XRaaCNpo.js";import"./index-CdUd9ljx.js";import"./index-CRQmWOJF.js";import"./index-BXM3Dfw8.js";import"./useEventCallback-DBxYjDu9.js";import"./SkeletonBar-DvhrPwLx.js";import"./LoadingCell-B7vN1qdl.js";import"./ColumnConfigDialog-4i9wvyxB.js";import"./DraggableList-COk6-1af.js";import"./search-B3fBbeLu.js";import"./Input-BwZPvKdY.js";import"./useControlled-DFWRskTz.js";import"./Button-Cg1RHP_F.js";import"./small-cross-CU5ZGaMO.js";import"./ActionButton-BGE_oPjS.js";import"./Checkbox-Dwil23Ps.js";import"./useValueChanged-Dc317jR-.js";import"./CollapsiblePanel-BZFSURwn.js";import"./MultiColumnSortDialog-CJozMRHX.js";import"./MenuTrigger-DN5oXxmx.js";import"./CompositeItem-CnHJu7Fq.js";import"./ToolbarRootContext-Qv2LHZju.js";import"./getDisabledMountTransitionStyles-BornKuZB.js";import"./getPseudoElementBounds-SeQsgf4Z.js";import"./chevron-down-CJ48f6Cy.js";import"./index-BtxoyDek.js";import"./error-5BtLRQh_.js";import"./BaseCbacBanner-CB5UjwFo.js";import"./makeExternalStore-CHwacdcE.js";import"./Tooltip-sxUSyvW-.js";import"./PopoverPopup-BxUICyhU.js";import"./debounce-BzmjoLzO.js";import"./useOsdkClient-CZTlJRJQ.js";import"./tick-BFnnzHdi.js";import"./DropdownField-BLF6TyfM.js";import"./isEqual-DiXstpw3.js";import"./withOsdkMetrics-BYb2lN1I.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
