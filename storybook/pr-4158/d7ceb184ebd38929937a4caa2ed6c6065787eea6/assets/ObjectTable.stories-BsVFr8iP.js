import{j as i}from"./iframe-DVVKVAtA.js";import{O as p}from"./object-table-xWTmSs7V.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BD9ZptkU.js";import"./preload-helper-CiYdp8rh.js";import"./Table-C78I-7LN.js";import"./index-B7XCjnpr.js";import"./Dialog-BDTkA2ep.js";import"./cross-CjD5OAho.js";import"./svgIconContainer-CP95Aflu.js";import"./useBaseUiId-INTXcr8e.js";import"./InternalBackdrop-j5nDH9EK.js";import"./composite-BRLZiHQF.js";import"./index-ClEpMZhJ.js";import"./index-CWl4XwMi.js";import"./index-CX83dS7O.js";import"./useEventCallback-DbYW2vCo.js";import"./SkeletonBar-FP5PV7dU.js";import"./LoadingCell-BhcjrHHe.js";import"./ColumnConfigDialog-DSL6FH2C.js";import"./DraggableList-EfHVIhPv.js";import"./search-DlCF-cVw.js";import"./Input-CmJfNxcc.js";import"./useControlled-D1zZrG1z.js";import"./Button-Ckc4gi75.js";import"./small-cross-DSgENzFy.js";import"./ActionButton-DacVQn36.js";import"./Checkbox-CKZucCnm.js";import"./useValueChanged-Den7cLID.js";import"./CollapsiblePanel-Bndv3s1q.js";import"./MultiColumnSortDialog-CfNZTqlg.js";import"./MenuTrigger-CdsAS-kY.js";import"./CompositeItem-D9SUAP6f.js";import"./ToolbarRootContext-C9Nw85K8.js";import"./getDisabledMountTransitionStyles-t3inJXqq.js";import"./getPseudoElementBounds-3KQzg8f9.js";import"./chevron-down-D2RihN-5.js";import"./index-U6QV7dK2.js";import"./error-DNT5rqeV.js";import"./BaseCbacBanner-DpJOKB-n.js";import"./makeExternalStore-BOpkq9BC.js";import"./Tooltip-Cbb54XuP.js";import"./PopoverPopup-Ca-inkaL.js";import"./debounce-D2AF5q98.js";import"./useOsdkClient-CYarTsyR.js";import"./tick-Br1MB05S.js";import"./DropdownField-BqTmBzOD.js";import"./isEqual-BkpzX1vQ.js";import"./withOsdkMetrics-DnEy29Gp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
