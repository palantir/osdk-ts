import{j as i}from"./iframe-CaPOT9dY.js";import{O as p}from"./object-table-qfLAuJ5S.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BADLOL_I.js";import"./preload-helper-CSJav7MA.js";import"./Table-BJZtcsXN.js";import"./index-Ho8J3uum.js";import"./Dialog-CsbG8SLi.js";import"./cross-Cgcm5Piu.js";import"./svgIconContainer-4uAuruPa.js";import"./useBaseUiId-53CqlhMX.js";import"./InternalBackdrop-BbFTOoCN.js";import"./composite-D8pTE5q2.js";import"./index-DSxM7sDI.js";import"./index-93ZDer7j.js";import"./index-d9vg3R-3.js";import"./useEventCallback-CSKwn_Ie.js";import"./SkeletonBar-CBVZTqOR.js";import"./LoadingCell-VK71aZjr.js";import"./ColumnConfigDialog-CP96cicV.js";import"./DraggableList-BWgG_TiL.js";import"./search-BIzPRVvQ.js";import"./Input-BuXaNZ_G.js";import"./useControlled-Desmn_f_.js";import"./Button-D6M8kmX2.js";import"./small-cross-ZhzSbXj6.js";import"./ActionButton-CRVG5z67.js";import"./Checkbox-B9GRJgNz.js";import"./useValueChanged-oispFcSe.js";import"./CollapsiblePanel-tClOO0R1.js";import"./MultiColumnSortDialog-BHr2SJsZ.js";import"./MenuTrigger-Cb2AZf0p.js";import"./CompositeItem-BhgS6pAU.js";import"./ToolbarRootContext-DKDtUl7Y.js";import"./getDisabledMountTransitionStyles-CDxcKCec.js";import"./getPseudoElementBounds-Dkvs0jvh.js";import"./chevron-down-D1yx8BpO.js";import"./index-BAZzkEjb.js";import"./error-D6rGwYTa.js";import"./BaseCbacBanner-C4kARAgI.js";import"./makeExternalStore-B6NoTbNG.js";import"./Tooltip-Bh3th1RS.js";import"./PopoverPopup-MxHlhfA4.js";import"./debounce-CKJ32hy1.js";import"./useOsdkClient-DrLWF_Tb.js";import"./tick-BpCC2p4B.js";import"./DropdownField-BaMFvM0M.js";import"./isEqual-BBGsGrE4.js";import"./withOsdkMetrics-CqZfQr7E.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
