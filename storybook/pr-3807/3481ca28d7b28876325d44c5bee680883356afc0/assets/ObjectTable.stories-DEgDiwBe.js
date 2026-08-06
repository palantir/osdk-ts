import{j as i}from"./iframe-CIDkGdxn.js";import{O as p}from"./object-table-CDvhocFU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C_PRul3P.js";import"./preload-helper-DQdeEyPy.js";import"./Table-CeTkSjYZ.js";import"./index-BJ5omvkY.js";import"./Dialog-BS3XtVnN.js";import"./cross-DiLX3wCt.js";import"./svgIconContainer-DvFKWRFA.js";import"./useBaseUiId-WZ7ghEOy.js";import"./InternalBackdrop-CCM9B3tL.js";import"./composite-D_D3blZ6.js";import"./index-Bm0NEbpd.js";import"./index-BRU202F9.js";import"./index-DCodQMOy.js";import"./useEventCallback-DYFKStAK.js";import"./SkeletonBar-DLywdHj8.js";import"./LoadingCell-BkbNULS7.js";import"./ColumnConfigDialog-1Pa3efDq.js";import"./DraggableList-CVTfhVx9.js";import"./search-D4KYriyJ.js";import"./Input-D-L1f88H.js";import"./useControlled-CxUQTcdD.js";import"./isEqual-CZm5WjX0.js";import"./small-cross-CqSaUkaj.js";import"./Button-DY2ccd-k.js";import"./ActionButton-k1VAR5BB.js";import"./Checkbox-DGJWvYrt.js";import"./useValueChanged-CtYbXPVR.js";import"./CollapsiblePanel-BnsCPhWJ.js";import"./MultiColumnSortDialog-5Y6Y8h7a.js";import"./MenuTrigger-D33FFHUx.js";import"./CompositeItem-B9naYOTm.js";import"./ToolbarRootContext-B1YU7RoG.js";import"./getDisabledMountTransitionStyles-BdszaF3h.js";import"./getPseudoElementBounds-Cf-uGjWx.js";import"./chevron-down-CvarMxgC.js";import"./index-58UGqHrm.js";import"./error-lvST2j8Q.js";import"./BaseCbacBanner-DUW70VF8.js";import"./makeExternalStore-BYndnrrh.js";import"./Tooltip-BzLx1d6a.js";import"./PopoverPopup-BteXE5Iu.js";import"./Combobox-BKIb61BZ.js";import"./useOsdkClient-BpRqG14V.js";import"./tick-CPPnJemQ.js";import"./DropdownField-DT0ygf3u.js";import"./withOsdkMetrics-CzLaYybz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
