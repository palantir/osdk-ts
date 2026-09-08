import{j as i}from"./iframe-DUenp6lH.js";import{O as p}from"./object-table-C48Ay4cH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ofy1AT21.js";import"./preload-helper-BrQ2IwN3.js";import"./Table-RA08xR2E.js";import"./index-CR7YeDMv.js";import"./Dialog-Bi0-87L8.js";import"./cross-DwLsQDiH.js";import"./svgIconContainer-CPPwWmWb.js";import"./useBaseUiId-C5AD1Gq1.js";import"./InternalBackdrop-BOQvDSVB.js";import"./composite-cl-eg-Mr.js";import"./index-DiIhoR1V.js";import"./index-Ki6h912l.js";import"./index-DzdVgYkQ.js";import"./useEventCallback-DwkKTB_T.js";import"./SkeletonBar-CnPy04Zb.js";import"./LoadingCell-CyhhjVaS.js";import"./ColumnConfigDialog-CBsiNMD4.js";import"./DraggableList-DHAnIO9Z.js";import"./search-DYKYo547.js";import"./Input-D9S29-Xm.js";import"./useControlled-CqXkm6hT.js";import"./Button-HrxQOGa9.js";import"./small-cross-Gsoau07o.js";import"./ActionButton-DG7GAKjE.js";import"./Checkbox-KlXsCHME.js";import"./useValueChanged-BebdI0MG.js";import"./CollapsiblePanel-DyVSO9SW.js";import"./MultiColumnSortDialog-DNU6QNyT.js";import"./MenuTrigger-D0rdQJBG.js";import"./CompositeItem-C4zuFT9w.js";import"./ToolbarRootContext-CHqPptLt.js";import"./getDisabledMountTransitionStyles-B1jh3EhZ.js";import"./getPseudoElementBounds-DK2fCaAe.js";import"./chevron-down-iXJuV4q7.js";import"./index-CVMpflAU.js";import"./error-BN9liXL6.js";import"./BaseCbacBanner-D-Q2jttt.js";import"./makeExternalStore-8dLgdQIB.js";import"./Tooltip-B4-11Oly.js";import"./PopoverPopup-BoCkIIy2.js";import"./debounce-BqwG49z-.js";import"./useOsdkClient-ByG7-mm8.js";import"./tick-Bkdmgl55.js";import"./DropdownField-CKAcXByL.js";import"./isEqual-CuqW1eM_.js";import"./withOsdkMetrics-Zv84aaRv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
