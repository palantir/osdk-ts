import{j as i}from"./iframe-DroyfEdp.js";import{O as p}from"./object-table-zvF5puNZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ciox6uv0.js";import"./preload-helper-DE-s4jHf.js";import"./Table-DXM3Vmnd.js";import"./index-DKMli8iM.js";import"./Dialog-CLIsAuRE.js";import"./cross-BriOBw5J.js";import"./svgIconContainer-CAEQYwKx.js";import"./useBaseUiId-pK5yffkm.js";import"./InternalBackdrop-B8R4iyvE.js";import"./composite-CNL7aYdy.js";import"./index-CnNUuV9s.js";import"./index-C74kuOpO.js";import"./index-BJ1GCCCw.js";import"./useEventCallback-CM-KCUTe.js";import"./SkeletonBar-iXSzVjAk.js";import"./LoadingCell-OoDlRZi8.js";import"./ColumnConfigDialog-ta5VV2KO.js";import"./DraggableList-BWyXHPtW.js";import"./search-BjVtZrtO.js";import"./Input-CIFY8xRI.js";import"./useControlled-CyNj1h6c.js";import"./Button-DQlH9UOj.js";import"./small-cross-CpVAMOV5.js";import"./ActionButton-Bo5K6E7v.js";import"./Checkbox-AzHcXRs-.js";import"./useValueChanged-l9ugVdto.js";import"./CollapsiblePanel-XsDrNHSw.js";import"./MultiColumnSortDialog-Bf4BQuX_.js";import"./MenuTrigger-CBfIFjIR.js";import"./CompositeItem-Dn6R0SEl.js";import"./ToolbarRootContext-COAtqpEr.js";import"./getDisabledMountTransitionStyles-DYm48-D_.js";import"./getPseudoElementBounds-BIC4My0w.js";import"./chevron-down-CNLIjVlD.js";import"./index-DBslVvKA.js";import"./error-DXyNBqI3.js";import"./BaseCbacBanner-DlKrtvoz.js";import"./makeExternalStore-BCFNzFHX.js";import"./Tooltip-C6pHptAP.js";import"./PopoverPopup-D9izk2qS.js";import"./debounce-7vvo2FtY.js";import"./useOsdkClient-Dm16U9MA.js";import"./tick-CiJt-Vxn.js";import"./DropdownField-0LHmrOpE.js";import"./isEqual-a_9omfBa.js";import"./withOsdkMetrics-C_wBtmZt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
