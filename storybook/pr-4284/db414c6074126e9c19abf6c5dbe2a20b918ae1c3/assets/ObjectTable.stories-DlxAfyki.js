import{j as i}from"./iframe-D3RqEcTg.js";import{O as p}from"./object-table-CjXauAQL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BJ-Qb7mD.js";import"./preload-helper-DEJIs2kk.js";import"./Table-D7FfGSt7.js";import"./index-Cbcna1KE.js";import"./Dialog-BUBSwhuB.js";import"./cross-CX1s17MX.js";import"./svgIconContainer-BFc_5UUB.js";import"./useBaseUiId-DzPouJ0p.js";import"./InternalBackdrop-Pm2S-c0l.js";import"./composite-LUqhuSI5.js";import"./index-C44NzcrV.js";import"./index-C2bdh9HG.js";import"./index-M7M1iWSs.js";import"./useEventCallback-gPsZT7qj.js";import"./SkeletonBar-CfBbo7kP.js";import"./LoadingCell-Bowo7-Vs.js";import"./ColumnConfigDialog-B0leskOm.js";import"./DraggableList-CLZMZbcA.js";import"./search-CqjQ6sEq.js";import"./Input-D6dyl9HO.js";import"./useControlled-CImu19gq.js";import"./Button-BcgwRa4F.js";import"./small-cross-CQsBQ66b.js";import"./ActionButton-DZXFI6ev.js";import"./Checkbox-W7WDR_Ca.js";import"./useValueChanged-CnBcuDv8.js";import"./CollapsiblePanel-DATqTs4G.js";import"./MultiColumnSortDialog-CmIRUWaB.js";import"./MenuTrigger-QvRoMfa4.js";import"./CompositeItem-DtKWkFxx.js";import"./ToolbarRootContext-DAdYN5ZS.js";import"./getDisabledMountTransitionStyles-3vJ9NXW6.js";import"./getPseudoElementBounds-2PfQFQkg.js";import"./chevron-down-CejxcKWv.js";import"./index-B6gngHYt.js";import"./error-CTTKBYvP.js";import"./BaseCbacBanner-CL1MugFe.js";import"./makeExternalStore-DTiablUL.js";import"./Tooltip-DsSzQZ3B.js";import"./PopoverPopup-RBpjqEC9.js";import"./debounce-1JchkNCt.js";import"./useOsdkClient-CYgwmGPG.js";import"./tick-BwpcUkSk.js";import"./DropdownField-BItMWDAM.js";import"./isEqual-BI5ezawU.js";import"./withOsdkMetrics-CVWMc52B.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
