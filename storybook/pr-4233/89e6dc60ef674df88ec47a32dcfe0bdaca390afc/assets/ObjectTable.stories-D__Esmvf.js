import{j as i}from"./iframe-BgteeNK7.js";import{O as p}from"./object-table-DEZ1G1NL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-1eHN5U9d.js";import"./preload-helper-D1QQRU4G.js";import"./Table-Ceo-XjXx.js";import"./index-Dh7VeDie.js";import"./Dialog-CeeYLjv-.js";import"./cross-DvJO6axF.js";import"./svgIconContainer-DMbES6r9.js";import"./useBaseUiId-Du-nzkw5.js";import"./InternalBackdrop-dEKlbFqb.js";import"./composite-Bw2x2Ls7.js";import"./index-D7D5AllY.js";import"./index-jEkUh6V5.js";import"./index-BwP8hvLS.js";import"./useEventCallback-D18102OR.js";import"./SkeletonBar-BQ-GEFTk.js";import"./LoadingCell-j33UUAJu.js";import"./ColumnConfigDialog-CYzqvnKo.js";import"./DraggableList-M5zgoLyw.js";import"./search-DnqpkQaz.js";import"./Input-BLKefb3k.js";import"./useControlled-DtLnayup.js";import"./Button-CTMGDM5U.js";import"./small-cross-CkykJveX.js";import"./ActionButton-D8GwUeFP.js";import"./Checkbox-C46TaKtu.js";import"./useValueChanged-Dxi0cZCL.js";import"./CollapsiblePanel-BVTc-BUt.js";import"./MultiColumnSortDialog-ZRpALFdX.js";import"./MenuTrigger-gK17DS2n.js";import"./CompositeItem-DbN5tfcI.js";import"./ToolbarRootContext-D9ylwIx5.js";import"./getDisabledMountTransitionStyles-BGJEt7yH.js";import"./getPseudoElementBounds-BUgENUZ_.js";import"./chevron-down-BazaCq4r.js";import"./index--nUSuqMP.js";import"./error-CHdhKpK1.js";import"./BaseCbacBanner-CP1G2zWQ.js";import"./makeExternalStore-D3iXBhr4.js";import"./Tooltip-BI_M7upB.js";import"./PopoverPopup-BdINBgGh.js";import"./debounce-DB2j4UjQ.js";import"./useOsdkClient-CV4JlL1O.js";import"./tick-Btid1QgJ.js";import"./DropdownField-N1dBIw-4.js";import"./isEqual-Dv0rflGl.js";import"./withOsdkMetrics-BGKMncSr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
